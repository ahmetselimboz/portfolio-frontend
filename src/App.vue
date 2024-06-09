<template>

    <div class="background"><router-view></router-view></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';


onMounted(() => {
    //document.getElementById('pageTitle').innerText = "Ahmet Selim Boz";

    useHead({
            title: "Ahmet Selim Boz",
            meta: [
                { name: 'description', content: "Hi everyone! I'm Selim. I am a computer engineering student who loves to develop, see, research, learn, explore and also defines himself as a backend developer." },
                { property: 'og:title', content: "Ahmet Selim Boz" },
                { property: 'og:description', content: "Hi everyone! I'm Selim. I am a computer engineering student who loves to develop, see, research, learn, explore and also defines himself as a backend developer." },
                { property: 'og:url', content: window.location.href },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: "Ahmet Selim Boz" },
                { name: 'twitter:description', content: "Hi everyone! I'm Selim. I am a computer engineering student who loves to develop, see, research, learn, explore and also defines himself as a backend developer." },
            ]
        });
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