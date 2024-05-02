@ -1,28 +1,32 @@
<template>
  <div class="loader" :class="{ 'loader-hidden': !isLoading }">
    <img class="logo" src="https://minio-api.server.ahmetselimboz.com.tr/mybucket/qrcode.png"></img>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  data() {
    return {
      isLoading: true,


    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>

<style>
.loader {
  z-index: 99;
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
}

.loader-hidden {
  opacity: 0;
  visibility: inherit;
  z-index: -99;
  visibility: inherit;
  z-index: -99;
}

.loader::after {
  content: "";
  width: 75px;
  height: 75px;
  border: 10px solid #bcbcbc;
  border-top-color: rgb(71, 0, 137);
  border-radius: 50%;
  animation: loading 0.75s ease infinite;
}

@keyframes loading {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
