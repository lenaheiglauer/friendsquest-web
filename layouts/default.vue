<template>
  <div>
    <!-- Header -->
    <header class="flex justify-between items-center px-6 py-4">
      <NuxtLink to="/">
        <img src="~/assets/svg/logo-text.svg" alt="FriendsQuest Logo" class="w-32">
      </NuxtLink>
      <nav>
        <ul class="flex">
          <li>
            <NuxtLink to="#" class="p-2">What is FriendsQuest?</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="p-2 mx-4">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="p-2">About Us</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>


    <slot/>

    <!-- Footer -->
    <footer>

    </footer>
  </div>
</template>