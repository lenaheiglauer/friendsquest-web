<template>
    <header>
      <div class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <NuxtLink to="/">
          <img src="~/assets/svg/logo-text.svg" alt="FriendsQuest Logo" class="w-32">
        </NuxtLink>
        <nav class="hidden md:block">
          <ul class="flex text-base">
            <li>
              <NuxtLink to="/#friendsquest" class="p-2">What is FriendsQuest?</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#faq" class="p-2 mx-8">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#about" class="p-2">About Us</NuxtLink>
            </li>
          </ul>
        </nav>
        <button ref="mobileNavButton" @click="toggleMobileNav" class="block md:hidden text-base">Menu</button>
      </div>
    </header>
    <!-- Mobile Navigation -->
    <div ref="mobileNav" class="hidden absolute top-0 h-screen w-full z-20 bg-terracotta80 flex-col">
      <button ref="mobileNavCloseButton" @click="toggleMobileNav" class="absolute right-6 top-[2.375rem] text-base">
        Close
      </button>
      <nav class="pt-48 pb-16 px-6">
        <ul class="flex flex-col gap-y-8 items-center text-center">
          <li>
            <NuxtLink @click="toggleMobileNav" to="/#friendsquest" class="py-4 text-2xl">What is FriendsQuest?</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMobileNav" to="/#faq" class="py-4 text-2xl">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMobileNav" to="/#about" class="py-4 text-2xl">About Us</NuxtLink>
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


onMounted(() => {
  mobileNav.value.style.display = "none"

  const {$bus} = useNuxtApp()
  $bus.$on("changeSection", (id) => {
    const hash = id === "" ? "/" : `/#${id}`
    if (window.location.hash !== hash) {
      history.pushState({}, window.title, hash)
    }
  })
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
</script>