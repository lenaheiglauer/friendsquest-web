<template>
    <header class="fixed top-0 w-full bg-white z-20 bottom-shadow pl-4 sm:pl-8 pr-6 sm:pr-10 py-4">
      <div class="flex justify-between items-center max-w-7xl mx-auto">
        <NuxtLink to="/" @click="scrollToTop">
          <img ref="headerLogo" src="~/assets/svg/logo-text.svg" alt="FriendsQuest Logo"
               class="w-32 transition-all duration-500">
        </NuxtLink>
        <nav class="hidden md:block">
          <ul ref="headerLinkList" class="flex text-base">
            <li v-for="link in navLinks" :key="link.id" class="mx-6">
              <NuxtLink :to="`#${link.id}`"
                        class="relative pb-1 underline-animation hover:text-terracotta80 transition-all duration-500"
                        :class="{'text-terracotta80 underline-active': link.id === currentlyActiveLink}"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <button ref="mobileNavButton" @click="toggleMobileNav" class="block md:hidden text-base">Menu</button>
      </div>
    </header>
    <!-- Mobile Navigation -->
    <div ref="mobileNav" class="hidden fixed top-0 h-screen w-full z-20 bg-terracotta80 flex-col">
      <button ref="mobileNavCloseButton" @click="toggleMobileNav" class="absolute right-6 sm:right-10 top-[2.375rem] text-base">
        Close
      </button>
      <nav class="pt-48 pb-16 px-6">
        <ul class="flex flex-col gap-y-8 items-center text-center">
          <li>
            <NuxtLink to="/" @click="toggleMobileNav" class="py-4 text-2xl">Home</NuxtLink>
          </li>
          <li v-for="link in navLinks" :key="link.id">
            <NuxtLink :to="`#${link.id}`" @click="toggleMobileNav" class="py-4 text-2xl">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <slot/>

    <Footer />
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useNuxtApp} from "nuxt/app";
import Footer from "../components/Footer";

const mobileNavButton = ref()
const mobileNav = ref()
const mobileNavCloseButton = ref()
const headerLogo = ref()
const headerLinkList = ref()

const navLinks = [
    {
      id: "friendsquest",
      text: "What Is FriendsQuest?"
    },
    {
      id: "faq",
      text: "FAQ"
    },
    {
      id: "about",
      text: "About Us"
    }
]

let currentlyActiveLink = ref("")

onMounted(() => {
  const {$bus} = useNuxtApp()

  // hide mobile navigation
  mobileNav.value.style.display = "none"

  // update browser url when scrolling between sections
  $bus.$on("changeSection", (id) => {
    const hash = id === "" ? "/" : `/#${id}`
    if (window.location.hash !== hash) {
      history.pushState({}, window.title, hash)
      currentlyActiveLink.value = id
    }
  })

  // reset active link when navigating to a different page (e.g. data-policy)
  $bus.$on("resetActiveLink", () => {
    currentlyActiveLink.value = ""
  })

  // resize header on scroll
  window.onscroll = function() { resizeHeader() }
})

function toggleMobileNav() {
  if(mobileNav.value.style.display === "none") {
    mobileNav.value.style.display = "flex"
    document.body.style.overflow = "hidden"
  } else {
    mobileNav.value.style.display = "none"
    document.body.style.overflow = "initial"
  }
}

function resizeHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerLogo.value.style.width = "6rem"
    headerLinkList.value.style.fontSize = "1rem"
  } else {
    headerLogo.value.style.width = "8rem"
    headerLinkList.value.style.fontSize = "1.125rem"
  }
}

function scrollToTop() {
  window.scrollTo(0, 0)
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  .underline-animation:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.125rem;
    background-color: #BF714D;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  .underline-animation:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .underline-active:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.125rem;
    background-color: #BF714D;
    bottom: 0;
    left: 0;
    transform-origin: left;
    transform: scaleX(1)
  }

  .bottom-shadow {
    box-shadow: -5px 1px 10px rgb(0 0 0 / 0.125);
  }
</style>