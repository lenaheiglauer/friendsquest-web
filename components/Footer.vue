<template>
  <footer>
    <div class="flex justify-between items-center flex-col sm:flex-row px-4 sm:px-8 py-12 max-w-7xl mx-auto">
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
    <div
        class="flex flex-col-reverse sm:flex-row justify-between items-center mx-4 sm:mx-8 xl:mx-auto pt-8 pb-12
        max-w-[calc(80rem-4rem)] border-t-2 border-color-gray-400">
      <p class="text-sm text-gray-500">© Copyright 2023. All rights reserved.</p>
      <div class="mb-6 sm:mb-0">
        <nuxt-link class="mr-8 text-sm underline text-gray-500 transition-all duration-500 hover:text-black"
                   to="https://www.fh-salzburg.ac.at/en/imprint" target="_blank">Imprint
        </nuxt-link>
        <nuxt-link class="text-sm underline text-gray-500 transition-all duration-500 hover:text-black"
                   to="/data-privacy" @click="emitUrlChange">Privacy Policy
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {useNuxtApp} from "nuxt/app";

function emitUrlChange() {
  const {$bus} = useNuxtApp()
  $bus.$emit("resetActiveLink")
}
</script>
