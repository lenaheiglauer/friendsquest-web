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
              <NuxtLink to="#friendsquest" class="p-2">What is FriendsQuest?</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="p-2 mx-4">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="p-2">About Us</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>


    <slot/>

    <footer>

    </footer>
  </div>
</template>