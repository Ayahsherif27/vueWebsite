<template>
  <div class="Testimonials">
 <Testcom />
  </div>
</template>

<script>
import Testcom from '../components/Testcom.vue';

// @ is an alias to /src
// "import HelloWorld from "@/components/HelloWorld.vue";"

export default {
  name: "Testimonials",
  components: {
   Testcom,

    // HelloWorld,
  },
};
</script>