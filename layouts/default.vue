<template>
  <div>
    <header>
      <div class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <NuxtLink to="/">
          <img src="~/assets/svg/logo-text.svg" alt="FriendsQuest Logo" class="w-32">
        </NuxtLink>
        <nav>
          <ul class="flex">
            <li>
              <NuxtLink to="/#friendsquest" class="p-2">What is FriendsQuest?</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#faq" class="p-2 mx-4">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#about" class="p-2">About Us</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>


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
      <div class="flex justify-between items-center mx-8 xl:mx-auto pt-8 pb-12 max-w-[calc(80rem-4rem)] border-t-2 border-color-gray-400">
        <p class="text-sm">© Copyright 2023. All rights reserved.</p>
        <div>
          <nuxt-link class="mr-4"
                     to="https://www.fh-salzburg.ac.at/en/imprint" target="_blank">Imprint
          </nuxt-link>
          <nuxt-link class=""
                     to="/data-privacy">Privacy Policy
          </nuxt-link>
        </div>
      </div>
    </footer>
  </div>
</template>