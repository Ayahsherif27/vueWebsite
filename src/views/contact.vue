<template>
  <div class="contact">
 <contactcom />
  </div>
</template>

<script>
import contactcom from '../components/contactcom.vue';

// @ is an alias to /src
// "import HelloWorld from "@/components/HelloWorld.vue";"

export default {
  name: "contact",
  components: {
   contactcom,

    // HelloWorld,
  },
};
</script>