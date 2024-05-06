<template>
    <div class="background"><router-view></router-view></div>

</template>



<script>
export default {
    components: {

    },
    data() {
        return {

        }
    },
    mounted() {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-GVWQ2F2229");

        document.getElementById('pageTitle').innerText = "Ahmet Selim Boz";
        document.querySelector('meta[property="og:title"]').setAttribute('content', "Ahmet Selim Boz");
        document.querySelector('meta[property="og:description"]').setAttribute('content', "Hi everyone! I'm Selim. I am a computer engineering student who loves to develop, see, research, learn, explore and also defines himself as a backend developer.");

    }

}

</script>



<style scoped></style>