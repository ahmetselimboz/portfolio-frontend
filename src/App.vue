<template>

    <div class="background"><router-view></router-view></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';


onMounted(() => {
    
    //document.getElementById('pageTitle').innerText = "Ahmet Selim Boz";
    let currentUrl = window.location.href;
    let trimmedUrl = removeTrailingSlash(currentUrl);

    console.log(trimmedUrl);

    useHead({
            title: "Ahmet Selim Boz",
            meta: [
                { name: 'description', content: "Hi everyone! I'm Selim. I am a computer engineering student who loves to develop, see, research, learn, explore and also defines himself as a backend developer." },
                { property: 'og:title', content: "Ahmet Selim Boz" },
                { property: 'og:description', content: "Hi everyone! I'm Selim. I am a computer engineering student who loves to develop, see, research, learn, explore and also defines himself as a backend developer." },
                { property: 'og:url', content: trimmedUrl },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: "Ahmet Selim Boz" },
                { name: 'twitter:description', content: "Hi everyone! I'm Selim. I am a computer engineering student who loves to develop, see, research, learn, explore and also defines himself as a backend developer." },
            ]
        });
})

function removeTrailingSlash(url) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

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