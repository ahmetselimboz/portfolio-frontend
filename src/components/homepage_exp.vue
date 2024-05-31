<template>
  <div class="work-panel">
    <div data-aos="fade-up" class="work-title-area">
      <h5>Jobs</h5>
      <h4>Look At My Work Experience</h4>
      <p>
        You can find the experiences I have gained throughout my career. Each
        experience has provided new learning opportunities and made me a more
        well-rounded developer.
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
              <router-link :to="'/work#' + resultExp._id">More Info<i id="exp-icon"
                  class="bx bx-right-arrow-alt"></i></router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div data-aos="fade-up" class="work-btn">
      <router-link to="/work#exp-section">See all experiences<i id="work-icon"
          class="bx bx-right-arrow-alt"></i></router-link>
    </div>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, reactive, inject } from 'vue';


const appAxios = inject("appAxios")

const variables = reactive({
    result: {}
})

onMounted(() => {
    fetchHomepage()

    AOS.init({
        duration: 1200,
    });


})

const fetchHomepage = async () => {
    const response = await appAxios.get('/experiences')
   
    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data

        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>