<template>
  <div class="work-panel">
    <div data-aos="fade-up" class="work-title-area">
      <h5>{{ $t('Jobs') }}</h5>
      <h4>{{ $t('Look_At_My_Work_Experience') }}</h4>
      <p>
        {{ $t('Look_At_My_Work_Experience_Desc') }}
      </p>
    </div>
    <div class="exp-area">
      <template v-for="resultExp in variables.result">
        <div class="exp-row">
          <div data-aos="fade-up" class="exp-card ">
            <i class="bx bx-caret-right caret"></i>
            <img :src="resultExp.mainImg" class="exp-img" alt="" />
            <div class="exp-text-area">
              <h6>{{ resultExp.tag }}</h6>
              <h2>{{ resultExp.name }}</h2>
              <h4>{{ resultExp.date }}</h4>
              <router-link :to="'/work#' + resultExp._id">{{ $t('More_Info') }}<i id="exp-icon"
                  class="bx bx-right-arrow-alt"></i></router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div data-aos="fade-up" class="work-btn">
      <router-link to="/work#exp-section">{{ $t('See_All_Experiences') }}<i id="work-icon"
          class="bx bx-right-arrow-alt"></i></router-link>
    </div>
  </div>
  <p style="display: none;">{{ switchStateText }}</p>
</template>

<script setup>
import store from '@/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, reactive, inject, computed } from 'vue';


const appAxios = inject("appAxios")

const variables = reactive({
    result: {}
})

onMounted(() => {
   

    AOS.init({
        duration: 1200,
    });


})

const switchStateText = computed(async () => {
  const state = store.state; // Access state
  let lang = null
  state.lang == true ? lang = 'TR' : lang = 'EN';

  await fetchHomepage(lang)
});

const fetchHomepage = async (lang) => {
    const response = await appAxios.get(`/experiences?lang=${lang}`)
   
    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data

        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>