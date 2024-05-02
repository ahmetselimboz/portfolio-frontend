<template>
    <router-view></router-view>
</template>



<script>
import Navbar from './frontend/components/navbar.vue';




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
    }

}

</script>



<style scoped></style>