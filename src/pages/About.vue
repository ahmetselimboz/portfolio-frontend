<template>
  <Loader />
  <navbar></navbar>
  <section>
    <div class="pages-title-area">
      <h4>{{ $t('About') }}</h4>
    </div>
  </section>

  <section v-if="variables.result">
    <div class="about-panel">
      <div v-html="variables.result.desc1"></div>
      <div class="about-img">
        <img :src="variables.result.mainImg" alt="" />
      </div>
      <div v-html="variables.result.desc2"></div>
      <div class="about-img-area">
        <img :src="variables.result.sideImg1" alt="" />
        <img :src="variables.result.sideImg2" alt="" />
        <img :src="variables.result.sideImg3" alt="" />
      </div>

      <div v-html="variables.result.desc3"></div>
    </div>
  </section>
  <p style="display: none;">{{ switchStateText }}</p>
  <Footer></Footer>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../components/loader.vue';
import { computed, inject, onMounted, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import store from '@/store';
const appAxios = inject("appAxios")

const variables = reactive({
  result: {}
})

onMounted(() => {
  AOS.init({
    duration: 1200,
  });

  store.commit("setLoading", true)
})

const switchStateText = computed(() => {
  const state = store.state; // Access state
  let lang = null
  state.lang == true ? lang = 'TR' : lang = 'EN';
  fetchAbout(lang)
});

const fetchAbout = async (lang) => {

  const response = await appAxios.get(`/about?lang=${lang}`)

  if (response.data.code == 200) {
    const data = await response.data;
    variables.result = data.data

    setTimeout(() => {
      store.commit("setLoading", false)
    }, 2000)

    return true
  } else {
    console.error("Something went wrong!");
  }
}

</script>

<style>
.about-panel {
  margin: 1rem 0;
  padding: 2rem 1rem;
}

.about-panel h5 {
  width: 60% !important;
}

.about-panel span {
  font-family: "Roboto", sans-serif !important;
  font-weight: 400 !important;
  font-size: 20px !important;
  color: var(--gray) !important;
  margin: 0.5rem auto !important;
  display: block !important;
}

.about-img {
  width: 50%;
  margin: 2rem auto;
  border-radius: 5px;
  box-shadow: #00000036 0 0 10px 5px;
  overflow: hidden;
}

.about-img img {
  width: 100%;
  transform: scale(1.1);
}

.about-img-area {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
  margin: 2rem auto;
  align-items: center;
  justify-content: center;
}

.about-img-area img {
  max-width: 30%;
  flex: 1 0 300px;
  margin: 2rem 0rem;
  border-radius: 5px;
  box-shadow: #00000036 0 0 10px 5px;
  overflow: hidden;
}

@media screen and (max-width: 480px) {
  .about-panel {
    margin: 1rem 0;
    padding: 2rem 1rem;
    text-align: center;
  }

  .about-panel h5 {
    width: 80% !important;
  }

  .about-img {
    width: 80%;
    margin: 2rem auto;
    border-radius: 5px;
    box-shadow: #00000036 0 0 10px 5px;
    overflow: hidden;
  }

  .about-img-area img {
    max-width: 100%;
    flex: 0 380px;
    margin: 1rem 0rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>
