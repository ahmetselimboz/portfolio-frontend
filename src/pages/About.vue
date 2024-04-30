<template>
  <Loader />
  <navbar></navbar>
  <section>
    <div class="pages-title-area">
      <h4>About</h4>
    </div>
  </section>

  <section>
    <div class="about-panel">
      <div v-html="resultAbout.desc1"></div>
      <div class="about-img">
        <img :src="resultAbout.mainImg" alt="" />
      </div>
      <div v-html="resultAbout.desc2"></div>
      <div class="about-img-area">
        <img :src="resultAbout.sideImg1" alt="" />
        <img :src="resultAbout.sideImg2" alt="" />
        <img :src="resultAbout.sideImg3" alt="" />
      </div>

      <div v-html="resultAbout.desc3"></div>
    </div>
  </section>
  <Footer></Footer>
</template>



<script>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '@/components/loader.vue';

export default {
  components: {
    "navbar": Navbar,
    Footer,
    Loader
  },
  data() {
    return {
      resultAbout: null
    }
  },
  mounted() {
    AOS.init({
      duration: 1200,
    });
  },
  created() {
    this.fetchAbout()
    this.$store.dispatch('setLoading', true);
  },
  methods: {
    async fetchAbout() {
      await fetch('https://backend.ahmetselimboz.com.tr/api/about')
        .then(response => response.json())
        .then(data => {
          this.resultAbout = data.data
          setTimeout(() => {
            this.$store.dispatch('setLoading', false);
          }, 1000)
        })
        .catch(error => {
          console.error('Veriler getirilirken hata:', error);
        });
    },
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
