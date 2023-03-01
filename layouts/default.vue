<template>
  <div class="relative">
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

    <footer>
      <div class="flex justify-between items-center flex-col sm:flex-row px-8 py-12 max-w-7xl mx-auto">
        <div class="flex items-center mb-12 sm:mb-0">
          <img src="~/assets/svg/logo.svg" alt="FriendsQuest Logo" class="h-20 mr-4">
          <div>
            <p class="font-bold">FriendsQuest</p>
            <p>The Unique Travel Experience</p>
          </div>
        </div>
        <div>
          <a href="https://www.producthunt.com/posts/friendsquest?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-friendsquest"
             target="_blank"><img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=374983&theme=neutral"
              alt="FriendsQuest - Leave&#0032;travel&#0032;memories&#0032;for&#0032;your&#0032;friends | Product Hunt"
              style="width: 250px; height: 54px;" width="250" height="54"/></a>
        </div>
      </div>
      <div class="flex flex-col-reverse sm:flex-row justify-between items-center mx-8 xl:mx-auto pt-8 pb-12 max-w-[calc(80rem-4rem)] border-t-2 border-color-gray-400">
        <p class="text-sm text-gray-500">© Copyright 2023. All rights reserved.</p>
        <div class="mb-6 sm:mb-0">
          <nuxt-link class="mr-4 text-base"
                     to="https://www.fh-salzburg.ac.at/en/imprint" target="_blank">Imprint
          </nuxt-link>
          <nuxt-link class=" text-base"
                     to="/data-privacy">Privacy Policy
          </nuxt-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useNuxtApp} from "nuxt/app";

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