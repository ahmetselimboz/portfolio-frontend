<template>
  <Loader />
  <navbar></navbar>
  <homepageMain></homepageMain>
  <hr data-aos="fade-up" class="now-underline" />
  <homepageWork></homepageWork>
  <hr data-aos="fade-up" class="now-underline" />
  <homepageExp></homepageExp>
  <hr data-aos="fade-up" class="now-underline" />
  <homepageBlog></homepageBlog>
  <Footer></Footer>
</template>


<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../components/loader.vue';
import { onBeforeMount, onMounted } from 'vue';
import homepageMain from '../components/homepage_main.vue'
import homepageWork from '../components/homepage_work.vue'
import homepageExp from '../components/homepage_exp.vue'
import homepageBlog from '../components/homepage_blog.vue'
import store from '@/store';

onMounted(() => {
  AOS.init({
    duration: 800,
  });
  store.commit("setLoading", false)
})

onBeforeMount(() => {
  store.commit("setLoading", true)
})

</script>
