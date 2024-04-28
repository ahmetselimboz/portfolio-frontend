<template>
  <Loader v-if="isLoading" />
  <navbar></navbar>
  <section v-if="json" class="main-panel">
    <div class="main-text-area">
      <div class="main-text">
        <div class="main-title-img">
          <img :src="json.profilImg" alt="" />
        </div>
        <div class="main-title-area">
          <h4>Hi there, I'm</h4>
        </div>
        <h3>Ahmet Selim Boz</h3>
        <h6 >
          {{ json.mainText }}
        </h6>
      </div>
    </div>
    <div class="main-img-area">
      <div class="main-img">
        <img  :src="json.sideImg" alt="" class="main-img-img" />
      </div>
    </div>
  </section>
  <section v-if="json">
    <div class="now-area">
      <div data-aos="fade-in" class="now-title-area">
        <h4>I'm a</h4>
      </div>
      <div class="now-row">
        <div data-aos="fade-up" data-aos-delay="0" class="now-card ">
          <i class="bx bx-code-alt" id="icon"></i>
          <h2 id="title">{{ json.card1.title }}</h2>
          <h4 id="alt-title"> {{ json.card1.text }} </h4>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" class="now-card ">
          <i class="bx bx-crown" id="icon"></i>
          <h2 id="title"> {{ json.card2.title }} </h2>
          <h4 id="alt-title"> {{ json.card2.text }} </h4>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="now-card ">
          <i class="bx bx-book-open" id="icon"></i>
          <h2 id="title"> {{ json.card3.title }} </h2>
          <h4 id="alt-title"> {{ json.card3.text }} </h4>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" class="now-card  ">
          <i class="bx bx-briefcase-alt" id="icon"></i>
          <h2 id="title"> {{json.card4.title}} </h2>
          <h4 id="alt-title"> {{ json.card4.text }} </h4>
        </div>
      </div>
    </div>
  </section>
  <hr class="now-underline  fade-in-bottom" />

</template>



<script>
import Navbar from '../components/navbar.vue'
import Loader from '../components/loader.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {
    "navbar": Navbar,
    Loader,
  },
  data() {
    return {
      json: null,
      isLoading: true,
    }
  },
  mounted(){
    AOS.init({
      duration: 1200, 

    });
  },
  created() {
    self = this

    fetch('https://portfolio-v2.server.ahmetselimboz.com.tr/api/homepage')
      .then(response => response.json())
      .then(data => {
        self.json = data.data;
        self.isLoading = false;
      })
      .catch(error => {
        console.error('Veriler getirilirken hata:', error);
      });
    //  this.fetchData();
  },
  methods: {
    // async fetchData() {
    //   try {
    //     const response = await axios.get('https://portfolio-v2.server.ahmetselimboz.com.tr/api/homepage');
    //     this.json = response.data.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    fetchData() {
      // Gerçek veri getirme mantığınızla değiştirin
      fetch('https://portfolio-v2.server.ahmetselimboz.com.tr/api/homepage')
        .then(response => response.json())
        .then(data => {
          this.json = data.data;
        })
        .catch(error => {
          console.error('Veriler getirilirken hata:', error);
        });
    },

  },


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

.now-underline {
  border: none;
  border-top: 0.1rem solid var(--gray-faded);
  width: 80%;
  border-radius: 10px;
  margin: 2rem auto;
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

.work-panel {
  margin: 1rem 0;
  padding: 2rem 1rem;
}

.work-title-area {
  text-align: center;
}

.work-title-area h5 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: var(--gray);
}

.work-title-area h4 {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: var(--purple);
}

.work-title-area p {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: var(--black);
  width: 60%;
  margin: 0 auto;
}

.work-area {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 2rem 8rem;
}

.work-card {
  max-width: 46%;
  flex: 1 0 380px;

  margin: 2rem 1rem;
}

.work-card-img-area {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  transform: translate(0, 0px);
  transition: 0.2s ease-in-out;
  box-shadow: #09011031 0 0 10px 3px;
}

.work-card-img {
  width: 100%;
}

.work-card-img-area:hover {
  width: 100%;
  transform: translate(0, -10px);
}

.work-card-text {
  padding: 1rem 0rem;
}

.work-card-text h5 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: var(--gray);
}

.work-card-text a {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 28px;
  color: var(--black);
  transition: 0.2s ease-in-out;
}

.work-card-text a:hover {
  color: var(--purple);
}

.work-card-text p {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: var(--gray);
  margin: 0.5rem 0;
}

.work-btn a {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: var(--purple);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  border: 3px solid #470089;
  border-radius: 10px;
  padding: 1rem;
}

#work-icon {
  font-size: 25px;
  transform: translate(0, 0);
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.work-btn a:hover #work-icon {
  transform: translate(3px, 0);
}

@media screen and (max-width: 480px) {
  .work-title-area h4 {
    font-size: 35px;
  }

  .work-title-area p {
    font-size: 16px;

    width: 80%;
  }

  .work-title-area h5 {
    font-size: 15px;
  }

  .work-card {
    max-width: 100%;
    flex: 0 380px;
  }

  .work-area {
    margin: 2rem 1rem;
  }

  .work-card-text p {
    font-size: 18px;
  }

  .work-btn a {
    font-size: 14px;
    border: 2px solid #470089;
    border-radius: 10px;
    padding: 0.5rem 0.8rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>
