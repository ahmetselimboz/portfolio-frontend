<template>
  <section class="main-panel">
    <div class="main-text-area">
      <div class="main-text">
        <div class="main-title-img">
          <img :src="variables.result.profilImg" alt="" />
        </div>
        <div class="main-title-area">
          <h4>{{ $t('Hello') }}</h4>
        </div>
        <h3>Ahmet Selim Boz</h3>
        <h6>
          {{ variables.result.mainText }}
        </h6>
      </div>
    </div>
    <div class="main-img-area">
      <div class="main-img">
        <img :src="variables.result.sideImg" alt="" class="main-img-img" />
      </div>
    </div>
  </section>
  <section>
    <div class="now-area">
      <div data-aos="fade-in" class="now-title-area">
        <h4>{{ $t('Iam') }}</h4>
      </div>
      <div class="now-row">
        <div v-if="variables.result.card1" data-aos="fade-up" data-aos-delay="0" class="now-card ">
          <i class="bx bx-code-alt" id="icon"></i>
          <h2 id="title">{{ variables.result.card1.title }}</h2>
          <h4 id="alt-title"> {{ variables.result.card1.text }} </h4>
        </div>
        <div v-if="variables.result.card2" data-aos="fade-up" data-aos-delay="100" class="now-card ">
          <i class="bx bx-crown" id="icon"></i>
          <h2 id="title"> {{ variables.result.card2.title }} </h2>
          <h4 id="alt-title"> {{ variables.result.card2.text }} </h4>
        </div>
        <div v-if="variables.result.card3" data-aos="fade-up" data-aos-delay="200" class="now-card ">
          <i class="bx bx-book-open" id="icon"></i>
          <h2 id="title"> {{ variables.result.card3.title }} </h2>
          <h4 id="alt-title"> {{ variables.result.card3.text }} </h4>
        </div>
        <div v-if="variables.result.card4" data-aos="fade-up" data-aos-delay="300" class="now-card  ">
          <i class="bx bx-briefcase-alt" id="icon"></i>
          <h2 id="title"> {{ variables.result.card4.title }} </h2>
          <h4 id="alt-title"> {{ variables.result.card4.text }} </h4>
        </div>
      </div>
    </div>
  </section>
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

const switchStateText = computed(() => {
  const state = store.state; // Access state
  let lang = null
  state.lang == true ? lang = 'TR' : lang = 'EN';
  fetchHomepage(lang)
});

const fetchHomepage = async (lang) => {

  const response = await appAxios.get(`/homepage?lang=${lang}`)

  if (response.data.code == 200) {
    const data = await response.data;
    variables.result = data.data

    return true
  } else {
    console.error("Something went wrong!");
  }
}

</script>

<style scoped>
.main-panel {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
}

.main-text-area {
  width: 60%;
  margin-left: 2.5rem;
}

.main-text {
  margin: 1rem 0rem 1rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
}

.main-title-area {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.main-title-area h4 {
  color: var(--purple);
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: transparent;
  font-size: 64px;
  font-weight: 600;
}

.main-title-img {
  width: 20%;
  margin: 0.5rem 0rem;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: #47008975 0 0 10px 3px;
  overflow: hidden;
}

.main-title-img img {
  width: 100%;
}

.main-text h3 {
  font-family: "Poppins", sans-serif;
  color: var(--black);
  font-size: 70px;
  font-weight: 800;
}

.main-text h6 {
  font-size: 24px;
  width: 70%;
  font-weight: 400;
  margin: 0.5rem 0;
  color: var(--gray);
}

.main-img-area {
  width: 40%;
}

.main-img {
  width: 70%;
  transition: 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: #0901103f 15px 15px 10px 5px;
}

.main-img-img {
  width: 100%;
  border-radius: 5px;
  height: inherit;
  transition: 0.2s ease-in-out;
  transform: scale(1.015);
}

.main-img-img:hover {
  transform: scale(1.13);
}

.main-img:hover {
  box-shadow: #09011055 15px 15px 10px 5px;
}

@media screen and (max-width: 480px) {
  .main-panel {
    display: flex;
    flex-direction: column;
    margin: 2rem 1.2rem;
  }

  .main-img-area {
    width: 100%;
  }

  .main-text-area {
    width: 100%;
    margin-left: 0rem;
    margin-bottom: 50px;
  }

  .main-text {
    margin: 1rem 0rem 1rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 85%;
  }

  .main-title-img {
    box-shadow: #47008963 0 0 10px 3px;
  }

  .main-title-area h4 {
    font-size: 30px;
    margin-top: 25px;
    color: var(--black);
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: transparent;
    font-weight: 800;
  }

  .main-text h3 {
    font-size: 35px;
  }

  .main-text h6 {
    font-size: 20px;
    width: 100%;
  }

  .main-img {
    width: 85%;
    box-shadow: #0901103f 10px 15px 10px 5px;
    margin: 0 auto;
  }

  .main-img:hover {
    box-shadow: #09011055 10px 15px 10px 5px;
  }

  .main-img-img {
    transform: scale(1.02);
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}

.now-area {
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  padding: 1rem;
}

.now-title-area {
  text-align: center;
}

.now-title-area h4 {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: var(--purple);
}



.now-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.now-card {
  width: 25%;
  margin: 1rem 1rem;
  text-align: center;
  padding: 1rem;
}

#icon {
  transform: translate(0, 0px);
  font-size: 55px;
  margin: 1rem 0;
  color: var(--gray);
  transition: 0.2s ease-in-out;
}

#title {
  transform: translate(0, 0px);
  font-size: 28px;
  font-weight: 500;
  color: var(--gray);
  transition: 0.2s ease-in-out;
}

#alt-title {
  transform: translate(0, 0px);
  font-weight: 400;
  margin: 0.5rem 0;
  color: var(--gray);
  transition: 0.2s ease-in-out;
}

.now-card:hover #icon {
  transform: translate(0, -10px);
  color: var(--purple);
}

.now-card:hover #title {
  transform: translate(0, -10px);
  color: var(--purple);
}

.now-card:hover #alt-title {
  transform: translate(0, -10px);
  color: var(--purple);
}

@media screen and (max-width: 480px) {
  .now-row {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .now-card {
    width: 100%;
    margin: 1rem 0rem;
    text-align: center;
    padding: 1rem;
  }

  .now-title-area h4 {
    font-size: 35px;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>