<template>
  <div class="loader" :class="{ 'loader-hidden': !isLoading }">
    <img class="logo" src="https://cdn.ahmetselimboz.com/icons/qrcode.png"></img>
  </div>
</template>

<script setup>
import store from '@/store';
import { computed } from 'vue';

const isLoading = computed(()=>{
  return store.getters.isLoading;
})
</script>




<!-- <script>
export default {
  name: 'Loader',
  data() {
    return {
  
    }
  },

  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script> -->

<style>

</style>
