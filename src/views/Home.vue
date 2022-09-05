<template>
  <div class="home">
  <slider />
  <section3 />
  </div>
</template>

<script>
import slider from '../components/slider.vue';
import section3 from '../components/section3.vue';
// @ is an alias to /src
// "import HelloWorld from "@/components/HelloWorld.vue";"

export default {
  name: "Home",
  components: {
    slider,
    section3

    // HelloWorld,
  },
};
</script>
