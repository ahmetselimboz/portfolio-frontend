<template>
    <img v-lazy="props.url" :class="className" @load="handleImageLoad">
</template>

<script setup>
import { onMounted, ref, onBeforeMount } from 'vue';

const className = ref("")

onBeforeMount(() => {
    className.value = props.class + " fade-in"

})

const props = defineProps(["class", "url"])

const handleImageLoad = (event) => {
    console.log("object");
    event.target.classList.add('is-loaded');
}

</script>

<style scoped>
.fade-in {
    opacity: 0;
    transition: opacity 1s ease-in-out !important;
}

.is-loaded {
    opacity: 1;
}
</style>