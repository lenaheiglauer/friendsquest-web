<template>
  <main class="bg-darkblue w-screen h-screen py-8 px-6">
    <NuxtLink to="/">
      <img src="~/assets/svg/logo-text-white.svg" alt="FriendsQuest Logo" class="mx-auto w-36">
    </NuxtLink>
    <div class="flex flex-col justify-center items-center text-white absolute inset-x-0 top-1/3">
      <h1 class="font-bold text-8xl mb-10">Oops!</h1>
      <h2 v-if="error.statusCode === 404" class="text-lg mb-10">404 - Page Not Found</h2>
      <h2 v-else class="text-lg mb-10">An Error Occurred - {{ error.statusCode }} </h2>
      <NuxtLink to="/"
                class="border-2 border-white rounded-full py-3 px-6 transition-all duration-500
                hover:text-darkblue hover:bg-white">
        Go to Homepage
      </NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  props: ["error"]
}
</script>
