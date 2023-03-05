<template>
  <div class="mt-24 h-[10rem] relative">
    <div class="absolute left-8 sm:left-[calc(50%-220px/2)]">
      <h3 ref="title" class="font-bold text-xl mb-3"></h3>
      <p ref="description" class="max-w-[450px] text-sm"></p>
    </div>
  </div>
  <div>
    <div class="flex justify-center mx-auto h-[calc(498px+4rem)] overflow-hidden relative">
      <div ref="slider" @scroll="handleScroll"
           class="flex items-center overflow-x-scroll scroll-smooth hide-scrollbar snap-mandatory snap-x mt-[-4rem]">
        <client-only>
          <div
              class="w-[220px] h-[476px] flex snap-center shrink-0 mx-[3rem] first:ml-0 last:mr-0
                      outline outline-1 outline-gray-200 rounded-lg"
              v-for="image in sliderImages" :key="image">
            <img :src="image" alt="" class="rounded-md">
          </div>
        </client-only>
        <!-- Phone -->
        <div class="aspect-[360/730] max-w-[250px] h-[498px] absolute left-[calc(50%-246px/2)]">
          <div
              class="absolute inset-y-[calc(1/730*100%)] right-[calc(5/730*100%)] left-[calc(7/730*100%)]
                rounded-[calc(58/360*100%)/calc(58/730*100%)] shadow-2xl"></div>
          <img src="~/assets/svg/iphone-14-frame.svg" alt="Phone Frame" width="360" height="730" class="absolute">
        </div>
      </div>
      <button ref="buttonToLeft" @click="handleClickLeft" class="absolute top-[calc(50%-4rem)] left-[calc(50%-(250px/7*5))]">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
          <path d="M655 976 255 576l400-400 56 57-343 343 343 343-56 57Z"/>
        </svg>
      </button>
      <button ref="buttonToRight" @click="handleClickRight" class="absolute top-[calc(50%-4rem)] right-[calc(50%-(250px/7*5))]">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/>
        </svg>
      </button>
    </div>
    <div class="flex justify-center">
      <button ref="slideIndicator" @click="handleClick" v-for="(image, index) in sliderImages" :key="index"
              :value="index"
              class="w-3 h-3 bg-gray-400 rounded-full mx-1"></button>
    </div>
  </div>
</template>

<script setup>
  import {onBeforeUnmount, onMounted, ref} from "vue";

  const slider = ref()
  const title = ref()
  const description = ref()
  const slideIndicator = ref()
  const buttonToLeft = ref()
  const buttonToRight = ref()

  const sliderImages = [
    new URL("@/assets/images/slider-1.png", import.meta.url),
    new URL("@/assets/images/slider-2.png", import.meta.url),
    new URL("@/assets/images/slider-3.png", import.meta.url),
    new URL("@/assets/images/slider-4.png", import.meta.url),
    new URL("@/assets/images/slider-5.png", import.meta.url),
    new URL("@/assets/images/slider-6.png", import.meta.url),
    new URL("@/assets/images/slider-7.png", import.meta.url),
  ]

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
      title: "Trace Other Footprints",
      text: "Take a look at where your friends have left their footprints on the globe. Maybe you'll pass by some " +
          "of them on your travels."
    },
    {
      title: "Explore Your Friend's Footprints",
      text: "Visit the places where your friends left their footprints and open their memories to see whats behind " +
          "the footprints."
    },
    {
      title: "Leave Auditory Memories",
      text: "When capturing a memory, a short audio sequence is recorded as well. When you are too far away to " +
          "open a footprint you can always listen to the sounds behind it."
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
    setArrowButtonState(0)
    setSlideIndicator(0)
    window.addEventListener("resize", setSliderPadding)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("resize", setSliderPadding)
  })

  function setSliderPadding() {
    const width = document.documentElement.clientWidth
    slider.value.style.paddingLeft = width / 2 - 220 / 2 + "px"
    slider.value.style.paddingRight = width / 2 - 220 / 2 + "px"
  }

  function setSliderText(idx) {
    title.value.innerText = sliderText[idx].title
    description.value.innerText = sliderText[idx].text
  }

  function setSlideIndicator(idx) {
    const button = slideIndicator.value[idx]
    button.style.backgroundColor = "rgba(175, 78, 33, 0.8)"

    if (currentSlideIdx !== idx) {
      const oldButton = slideIndicator.value[currentSlideIdx]
      oldButton.style.backgroundColor = "rgb(156 163 175)"
    }
  }

  function setArrowButtonState(idx) {
    if (idx === 0) {
      buttonToLeft.value.style.display = "none"
    }
    else if (idx === sliderImages.length - 1) {
      buttonToRight.value.style.display = "none"
    }
    else {
      buttonToLeft.value.style.display = "block"
      buttonToRight.value.style.display = "block"
    }
  }

  function handleScroll(event) {
    const fromLeft = event.currentTarget.scrollLeft
    const newSlideIdx = Math.floor(fromLeft / (220 + 6 * 16))

    setSlideIndicator(newSlideIdx)
    setSliderText(newSlideIdx)
    setArrowButtonState(newSlideIdx)

    currentSlideIdx = newSlideIdx
  }

  function handleClickRight() {
    const newSlideIdx = currentSlideIdx + 1

    // scroll to new slide position
    slider.value.scrollLeft = newSlideIdx * (220 + 6 * 16)
  }

  function handleClickLeft() {
    const newSlideIdx = currentSlideIdx - 1

    // scroll to new slide position
    slider.value.scrollLeft = newSlideIdx * (220 + 6 * 16)
  }

  function handleClick(event) {
    const newSlideIdx = event.currentTarget.value

    // scroll to new slide position
    slider.value.scrollLeft = newSlideIdx * (220 + 6 * 16)
  }
</script>

<style>
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