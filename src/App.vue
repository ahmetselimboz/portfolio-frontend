<template>
    <div class="background"><router-view></router-view></div>

</template>

<script setup>
import { onMounted } from 'vue';



onMounted(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-GVWQ2F2229");

    document.getElementById('pageTitle').innerText = "Ahmet Selim Boz";

})

</script>

<!-- <script>
export default {
    components: {

    },
    data() {
        return {

        }
    },
    mounted() {
      
    }

}

</script> -->



<style scoped></style>