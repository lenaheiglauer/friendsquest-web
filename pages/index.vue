<template>
  <main>
    <!-- Landing -->
    <section class="bg-terracotta80 overflow-hidden px-8 pt-12 md:pt-24 pb-12">
      <div class="flex flex-col lg:grid lg:grid-cols-[8fr_5fr] gap-x-6 mx-auto max-w-7xl">
        <div class="z-10">
          <h1 class="text-6xl md:text-7xl leading-tight md:leading-tight font-bold mb-12">The Unique Travel Experience</h1>
          <p class="mb-10 max-w-[550px]">
            With <strong>FriendsQuest</strong> you can travel the world and
            <strong>capture the most special moments</strong> as footprints on your globe.
          </p>
          <div class="grid grid-cols-[repeat(2,_minmax(0,_160px))] gap-x-6">
            <NuxtLink to="https://play.google.com/store/apps/details?id=at.friendsquest.app">
              <img src="~/assets/svg/google-play-badge.svg" alt="Google Play Badge" class="w-full max-w-[160px]">
            </NuxtLink>
            <NuxtLink to="https://apps.apple.com/at/app/friendsquest/id1667562544">
              <img src="~/assets/svg/app-store-badge.svg" alt="App Store Badge" class="w-full max-w-[160px]">
            </NuxtLink>
          </div>
        </div>
        <div class="mx-auto lg:mx-0 mt-20 relative">
          <!-- Circles -->
          <div
              class="absolute left-[calc(125px)] top-4 h-[900px] w-[900px] -translate-x-1/3 stroke-gray-300/70
              [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]
              sm:top-16 sm:-translate-x-1/2 lg:-top-16 xl:-top-14"
          >
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                 class="absolute inset-0 h-full w-full animate-spin-slow">
              <path
                  d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                  stroke="#D4D4D4" stroke-opacity="0.7"></path>
              <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="#af4e21"
                    stroke-linecap="round"></path>
              <defs>
                <linearGradient id=":r3:-gradient-1" x1="1" y1="513" x2="1" y2="1025"
                                gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                 class="absolute inset-0 h-full w-full animate-spin-reverse-slower">
              <path
                  d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                  stroke="#D4D4D4" stroke-opacity="0.7"></path>
              <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:r3:-gradient-2)"
                    stroke-linecap="round"></path>
              <defs>
                <linearGradient id=":r3:-gradient-2" x1="913" y1="513" x2="913" y2="913"
                                gradientUnits="userSpaceOnUse">
                  <stop stop-color="#af4e21"></stop>
                  <stop offset="1" stop-color="#af4e21" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <!-- Phone -->
          <div class="aspect-[366/729] max-w-[250px] h-[498px] relative">
            <div
                class="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)]
                rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
            <div
                class="absolute w-[calc(318/366*100%)] h-[calc(686/729*100%)] overflow-hidden
                left-[calc(45/2/366*100%)] top-[calc(45/2/729*100%)]">
              <img src="~/assets/images/header.png" alt="">
            </div>
            <img src="~/assets/svg/phone-frame.svg" alt="Phone Frame" width="366" height="729" class="absolute">
          </div>
        </div>
      </div>
    </section>

    <!-- What is FriendsQuest -->
    <section id="friendsquest" class="pt-20 pb-24 relative">
      <div class="absolute right-0 top-28">
        <svg width="957" height="800" viewBox="0 0 957 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M99 125.521L957 0V800L0 275.835L99 125.521Z" fill="#6AD3E5"/>
        </svg>
      </div>
      <div class="mx-auto max-w-7xl relative z-10 px-8">
        <h2 class="text-3xl font-bold mb-6">Travel, Share and Follow Footprints. Try It for Yourself.</h2>
        <p class="max-w-[550px]">
          Battle your friends in traveling around the world, find places you have never been before and share memories
          with your friends in the most unique way.
        </p>
      </div>
      <div class="mt-24 h-[10rem] relative">
        <div class="absolute left-[calc(50%-218px/2)]">
          <h3 ref="title" class="font-bold text-xl mb-3"></h3>
          <p ref="description" class="max-w-[450px]"></p>
        </div>
      </div>
      <div>
          <div class="flex justify-center mx-auto h-[calc(498px+6rem)] overflow-hidden relative">
              <div ref="slider" @scroll="handleScroll"
                   class="flex items-center overflow-x-scroll scroll-smooth hide-scrollbar snap-mandatory snap-x mt-[-6rem]">
                <client-only>
                  <div
                      class="w-[218px] h-[473px] flex snap-center shrink-0 mx-[3rem] first:ml-0 last:mr-0
                      border border-solid border-gray-200"
                      v-for="image in sliderImages" :key="image">
                    <img :src="image" alt="">
                  </div>
                </client-only>
                <!-- Phone -->
                <div class="aspect-[366/729] max-w-[250px] h-[498px] absolute left-[calc(50%-246px/2)]">
                  <div
                      class="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)]
                rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
                  <img src="~/assets/svg/phone-frame.svg" alt="Phone Frame" width="366" height="729" class="absolute">
                </div>
              </div>
          </div>
        <div class="flex justify-center">
          <button ref="slideIndicator" @click="handleClick" v-for="(image, index) in sliderImages" :key="index" :value="index"
                  class="w-3 h-3 bg-gray-400 rounded-full mx-1"></button>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-darkblue px-8 pt-20 pb-12 text-white">
      <div class="mx-auto max-w-7xl mb-20">
        <h2 class="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <p class="max-w-[550px]">
          If you have anything else you want to ask, <a
            class="underline" href="mailto:app.friendsquest@gmail.com">reach out to us</a>.
        </p>
      </div>
      <div class="mx-auto max-w-7xl">
        <FAQs/>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="px-8 pt-20 pb-12">
      <div class="mx-auto max-w-7xl mb-20">
        <h2 class="text-3xl font-bold mb-6">About Us</h2>
        <p class="max-w-[550px]">
          We are four students who share the same passion - travel to unique places and share them with our friends. To
          make this experiences even more special and unique we built FriendsQuest.
        </p>
      </div>
    </section>
  </main>
</template>


<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
import FAQs from "../components/FAQs";

const slider = ref()
const title = ref()
const description = ref()
const slideIndicator = ref()

const sliderImages = ref([
  new URL("@/assets/images/slider-1.png", import.meta.url),
  new URL("@/assets/images/slider-2.png", import.meta.url),
  new URL("@/assets/images/slider-3.png", import.meta.url),
  new URL("@/assets/images/slider-4.png", import.meta.url),
  new URL("@/assets/images/slider-5.png", import.meta.url),
  new URL("@/assets/images/slider-6.png", import.meta.url),
  new URL("@/assets/images/slider-7.png", import.meta.url),
])

let currentSlideIdx = 0

const sliderText = [
  {
    title: "Create Your Footprint",
    text: "Take a picture of your special moment and describe what makes this memory unforgettable. Your footprint " +
        "will be left exactly where you took it."
  },
  {
    title: "Connect With Your Friends",
    text: "Invite your friends to join the fun! More friends means more memories."
  },
  {
    title: "Trace Your Friend's Footprints",
    text: "Visit the places where your friends left their footprints and open their memories to see whats behind " +
        "the footprints."
  },
  {
    title: "Leave Auditory Memories",
    text: "When capturing a memory, a short audio sequence is recorded as well. When you are too far away to " +
        "open a footprint you can always listen to the sounds behind it."
  },
  {
    title: "React to Footprints",
    text: "Tell your friends you visited their footprints by leaving a comment or emoji."
  },
  {
    title: "Collect Points",
    text: "Climb up the leader board by collecting points - competing against your friends and the world's " +
        "leading travelers."
  },
  {
    title: "Visit Your Own Memories",
    text: "In your profile you will find all your left footprints. Alternatively, you can also view them on the globe."
  }
]

onMounted(() => {
  setSliderText(0)
  setSliderPadding()
  setSlideIndicator(0)
  window.addEventListener("resize", setSliderPadding)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", setSliderPadding)
})

function setSliderPadding() {
  const width = document.documentElement.clientWidth
  slider.value.style.paddingLeft = width / 2 - 218 / 2 + "px"
  slider.value.style.paddingRight = width / 2 - 218 / 2 - 2 * 16 + "px"
}

function setSliderText(idx) {
  title.value.innerText = sliderText[idx].title
  description.value.innerText = sliderText[idx].text
}

function setSlideIndicator(idx) {
  const button = slideIndicator.value[idx]
  button.style.backgroundColor = "rgba(175, 78, 33, 0.8)"

  if(currentSlideIdx !== idx) {
    const oldButton = slideIndicator.value[currentSlideIdx]
    oldButton.style.backgroundColor = "rgb(156 163 175)"
  }
}

function handleScroll(event) {
  const fromLeft = event.currentTarget.scrollLeft
  const newSlideIdx = Math.floor(fromLeft / (218 + 6 * 16))

  setSlideIndicator(newSlideIdx)
  setSliderText(newSlideIdx)

  currentSlideIdx = newSlideIdx
}

function handleClick(event) {
  const newSlideIdx = event.currentTarget.value

  // scroll to new slide position
  slider.value.scrollLeft = newSlideIdx * (218 + 6 * 16)
}

</script>

<style>
  @keyframes spin-reverse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-spin-reverse-slower {
    animation: spin-reverse 6s linear infinite;
  }

  .animate-spin-slow {
    animation: spin 4s linear infinite;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>