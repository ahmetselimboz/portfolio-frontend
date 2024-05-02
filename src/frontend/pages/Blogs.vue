<template>
  <Loader />
  <navbar></navbar>
  <section>
    <div class="pages-title-area">
      <h4>Blog</h4>
      <p>
        You can find the posts where I share my passion for software and
        technology. In my posts, I share with you the innovations in the industry,
        my experiences and my insights into technology.
      </p>
    </div>
  </section>
  <section>
    <div class="work-panel">
      <div class="blogs-area">
        <template v-for="resultBlog in ResultBlog">
          <div class="blogs-card">
            <a :href="$router.resolve({name: 'blog', params:{id:resultBlog._id}}).href" >
              <div class="blogs-card-img-area">
                <img class="blogs-card-img" :src="resultBlog.mainImg" alt="" />
              </div>
            </a>
            <div class="blogs-card-text">
              <div class="blogs-card-tags">
                <template v-for="element in resultBlog.tags">
                  <h5>{{ element.tagName }}</h5>
                </template>
              </div>

              <a :href="'/blog-detail/' + resultBlog._id">{{ resultBlog.title }}</a>
              <p>{{ resultBlog.desc }}</p>
            </div>
          </div>
        </template>

      </div>
    </div>
  </section>
  <Footer></Footer>
</template>



<script>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../components/loader.vue';
import loader from "@/frontend/assets/js/index.js";

export default {
  components: {
    "navbar": Navbar,
    Footer,
    Loader
  },
  data() {
    return {
      ResultBlog: [],

    }
  },
  mounted() {
    AOS.init({
      duration: 1200,
    });
    loader()
  },
  created() {
    this.fetchBlogs()
    this.$store.dispatch('setLoading', true);
  },
  methods: {
    
    async fetchBlogs() {
      await fetch('https://backend.ahmetselimboz.com.tr/api/blogs')
        .then(response => response.json())
        .then(data => {
          this.ResultBlog = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));;
          setTimeout(() => {
            this.$store.dispatch('setLoading', false);
          }, 1000)
        })
        .catch(error => {
          console.error('Veriler getirilirken hata:', error);
        });
    }
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
</style>
