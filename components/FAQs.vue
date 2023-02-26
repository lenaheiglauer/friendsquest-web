<template>
  <ul class="lg:columns-3 lg:gap-x-10">
    <li v-for="q in questions" class="inline-block mb-12 lg:mb-16">
      <h3 class="font-bold text-lg mb-2">{{ q.question }}</h3>
      <p class="text max-w-screen-sm">{{ q.answer }}</p>
    </li>
  </ul>
</template>

<script setup>
import {ref} from "vue";

const questions = ref([
  {
    question: "What is the purpose of the app?",
    answer: "The app allows you to create digital footprints, which are combinations of an image and audio that " +
        "represent a moment or experience in your life at a specific location."
  },
  {
    question: "How do I create a digital footprint?",
    answer: "To create a digital footprint, first click the plus button at the globe. An audio message to go along " +
        "with the image is recorded in the background automatically. Finally, save your digital footprint. " +
        "Afterwards it's visible for your friends. "
  },
  {
    question: "Can I customize my digital footprint?",
    answer: "Yes, you can customize the image and audio that make up your digital footprint. You can also add " +
        "captions or a description to help describe your footprint."
  },
  {
    question: "Can I share my digital footprint with others?",
    answer: "Yes, you're footprints are automatically shared with your friends. In the future you can also choose " +
        "to make your footprint private and only visible to yourself."
  },
  {
    question: "Is there a limit to how many digital footprints I can create?",
    answer: "There is no limit to the number of digital footprints you can create. Feel free to capture as many " +
        "moments and experiences as you'd like."
  },
  {
    question: "Is it possible to delete a digital footprint that I have created?",
    answer: "Yes, it is possible to delete a digital footprint that you have created. You can do this from your " +
        "profile page or by accessing the footprint directly. "
  },
  {
    question: "Is the app free to use?",
    answer: "The app is free to download and use."
  },
  {
    question: "How do I report a problem or issue with the app?",
    answer: "If you encounter a problem or issue with the app, you can report it by contacting us via e-mail."
  },
  {
    question: "How can I receive points within the app?",
    answer: "There are several ways to receive points. In the near future there even will be bonus points for " +
        "completing certain tasks. The best way to know how to receive points is to try it out. Wouldn't it be " +
        "boring if we just tell you how to get points? It's like revealing a magic trick. You don't do that ;) "
  }
])

</script>

<style scoped>

</style>