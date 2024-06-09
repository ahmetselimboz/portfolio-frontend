<template>
  <!-- <Loader /> -->
  <navbar></navbar>
  <section>
    <div class="pages-title-area">
      <h4>{{ $t('Work') }}</h4>
      <p>
        {{ $t('Work_Desc') }}
      </p>
    </div>
  </section>
  <section>
    <div class="work-panel">
      <div class="section-title">
        <h3>{{ $t('Projects') }}</h3>
        <hr class="section-title-line" />
      </div>
      <div class="work-area">
        <template v-for="item in variables.homeWork">
          <div data-aos="fade-in" class="work-card">
            <div class="work-card-img-area">
              <a :href="'/work/' + item.slug">
                <img class="work-card-img" :src="item.mainImg" alt="" />
              </a>
            </div>
            <div class="work-card-text">
              <h5>{{ item.tag }} </h5>
              <a :href="'/work/' + item.slug">{{ item.name }}</a>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <hr data-aos="fade-up" class="now-underline" />
  <section id="exp-section">
    <div class="work-panel">
      <div data-aos="fade-up" class="section-title">
        <h3>{{ $t('Experiences') }}</h3>
        <hr class="section-title-line" />
      </div>
      <div class="exp-area-w">
        <template v-for="resultExp in variables.ResultExp">
          <div class="exp-row-w" :id="resultExp._id">
            <div data-aos="fade-up" class="exp-card-w">
              <i class="bx bx-caret-right caret-w"></i>
              <img :src="resultExp.mainImg" class="exp-img-w" alt="" />
              <div class="exp-text-area-w">
                <h6>{{ resultExp.tag }}</h6>
                <h2>{{ resultExp.name }}</h2>
                <h4>{{ resultExp.date }}</h4>
                <h3>{{ resultExp.desc }}</h3>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <hr data-aos="fade-up" class="now-underline" />
  <section>
    <div class="work-panel">
      <div data-aos="fade-up" class="section-title ">
        <h3>{{ $t('Skills') }}</h3>
        <hr class="section-title-line" />
      </div>
      <div class="skills-area">
        <template v-for="(resultSkill, index) in variables.ResultSkill" :key="index">

          <div data-aos="fade-in" class="skills-card">
            <div class="skills-card-text">
              <h5>{{ resultSkill.name }}</h5>

              <h5 style="margin-left: 0.5rem">(%)</h5>
            </div>
            <div class="rating" :class="getScoreClass(resultSkill.percent)"
              :style="getGradientStyle(resultSkill.percent)">
              <span>{{ resultSkill.percent }} <small>%</small></span>
            </div>
          </div>
        </template>


      </div>
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
import { onMounted, reactive, inject, computed } from 'vue';
import store from '@/store';

const appAxios = inject("appAxios")

const variables = reactive({
  homeWork: null,
  ResultExp: null,
  ResultSkill: []
})

onMounted(() => {
  AOS.init({
    duration: 1200,
  });


  fetchExp()
  fetchSkill()
})

const switchStateText = computed(async () => {
  const state = store.state; // Access state
  let lang = null
  state.lang == true ? lang = 'TR' : lang = 'EN';
  await fetchWorks(lang)
  await fetchExp(lang)
});

const getScoreClass = (percent) => {
  return percent < 40 ? 'bad' : percent < 76 ? 'meh' : 'good';
}
const getGradientStyle = (percent) => {
  const ratingColor = getColor(percent);
  return `background: conic-gradient(${ratingColor} ${percent}%, transparent 0 100%)`;
}
const getColor = (percent) => {

  return percent < 40 ? '#e74c3c' : percent < 76 ? '#f1c40f' : '#27ae60';
}
const fetchWorks = async (lang) => {
  const response = await appAxios.get(`/works?lang=${lang}`)

  if (response.data.code == 200) {
    const data = await response.data;
    variables.homeWork = data.data.slice(0, 4).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return true
  } else {
    console.error("Something went wrong!");
  }
}

const fetchExp = async (lang) => {

  const response = await appAxios.get(`/experiences?lang=${lang}`)

  if (response.data.code == 200) {
    const data = await response.data;
    variables.ResultExp = data.data.slice(0, 3).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return true
  } else {
    console.error("Something went wrong!");
  }
}

const fetchSkill = async () => {
  const response = await appAxios.get('/skills')

  if (response.data.code == 200) {
    const data = await response.data;
    variables.ResultSkill = data.data.sort((a, b) => new Date(b.percent) - new Date(a.percent));

    return true
  } else {
    console.error("Something went wrong!");
  }
}

</script>



<style>
:root {
  --rating-size: 10rem;
  --bar-size: 1rem;
  --background-color: #e7f2fa;
  --rating-color-default: #2980b9;
  --rating-color-background: #c7e1f3;
  --rating-color-good: #27ae60;
  --rating-color-meh: #f1c40f;
  --rating-color-bad: #e74c3c;
}

/* Rating item */
.rating {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;

  background: var(--rating-color-default);
  color: var(--rating-color-default);
  width: var(--rating-size);
  height: var(--rating-size);

  /* Basic style for the text */
  font-size: calc(var(--rating-size) / 3);
  line-height: 1;
}

/* Rating circle content */
.rating span {
  position: relative;
  display: flex;
  font-weight: bold;
  z-index: 2;
  font-family: "Roboto", sans-serif;
}

.rating span small {
  font-size: 0.5em;
  font-weight: 900;
  align-self: center;
}

/* Bar mask, creates an inner circle with the same color as thee background */
.rating::after {
  content: "";
  position: absolute;
  inset: var(--bar-size);
  background: var(--background-color);
  border-radius: inherit;
  z-index: 1;
}

/* Bar background */
.rating::before {
  content: "";
  position: absolute;
  inset: var(--bar-size);
  border-radius: inherit;
  box-shadow: 0 0 0 1rem var(--rating-color-background);
  z-index: -1;
}

/* Classes to give different colors to ratings, based on their score */
.rating.good {
  background: var(--rating-color-good);
  color: var(--rating-color-good);
}

.rating.meh {
  background: var(--rating-color-meh);
  color: var(--rating-color-meh);
}

.rating.bad {
  background: var(--rating-color-bad);
  color: var(--rating-color-bad);
}

.skills-area {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 2rem 8rem;
}

.skills-card {
  max-width: 20%;
  flex: 1 0 260px;
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skills-card-img-area {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  transform: translate(0, 0px);
  transition: 0.2s ease-in-out;
}

.skills-card-img-area:hover {
  width: 100%;
  transform: translate(0, -10px);
}

.skills-card-text {
  padding: 1rem 0rem;
  display: flex;
  flex-direction: row;
}

.skills-card-text h5 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: var(--black);
}

.skills-card-text p {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: var(--gray);
  margin: 0.5rem 0;
}

@media screen and (max-width: 480px) {
  .skills-title-area h4 {
    font-size: 35px;
  }

  .skills-title-area p {
    font-size: 16px;

    width: 80%;
  }

  .skills-title-area h5 {
    font-size: 15px;
  }

  .skills-card {
    max-width: 100%;
    flex: 0 380px;
  }

  .skills-area {
    margin: 2rem 1rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>
