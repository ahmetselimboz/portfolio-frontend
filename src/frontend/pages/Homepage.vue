<template>
  <Loader />
  <navbar></navbar>
  <section class="main-panel">
    <div class="main-text-area">
      <div class="main-text">
        <div class="main-title-img">
          <img :src="json.profilImg" alt="" />
        </div>
        <div class="main-title-area">
          <h4>Hi there, I'm</h4>
        </div>
        <h3>Ahmet Selim Boz</h3>
        <h6>
          {{ json.mainText }}
        </h6>
      </div>
    </div>
    <div class="main-img-area">
      <div class="main-img">
        <img :src="json.sideImg" alt="" class="main-img-img" />
      </div>
    </div>
  </section>
  <section>
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
          <h2 id="title"> {{ json.card4.title }} </h2>
          <h4 id="alt-title"> {{ json.card4.text }} </h4>
        </div>
      </div>
    </div>
  </section>
  <hr data-aos="fade-up" class="now-underline" />
  <section>
    <div class="work-panel">
      <div data-aos="fade-up" class="work-title-area">
        <h5>Portfolio</h5>
        <h4>Check My Works</h4>
        <p>
          You can explore the projects I have developed. Each of them is a special
          work that reflects my talents and creativity and has been a learning and
          discovery experience for me.
        </p>
      </div>
      <div class="work-area">
        <template v-for="item in homeWork">
          <div data-aos="fade-in" class="work-card">
            <div class="work-card-img-area">
              <router-link :to="'/work-detail/' + item._id">
                <img class="work-card-img" :src="item.mainImg" alt="" />
              </router-link>
            </div>
            <div class="work-card-text">
              <h5>{{ item.tag }} </h5>
              <router-link :to="'/work-detail/' + item._id">{{ item.name }}</router-link>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </template>
      </div>
      <div data-aos="fade-up" class="work-btn">
        <router-link to="/work">See all works<i id="work-icon" class="bx bx-right-arrow-alt"></i></router-link>
      </div>
    </div>
  </section>
  <hr data-aos="fade-up" class="now-underline" />
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
      <template v-for="resultExp in ResultExp">
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

  <hr data-aos="fade-up" class="now-underline" />
  <section>
    <div class="work-panel">
      <div data-aos="fade-up" class="work-title-area ">
        <h5>Blogs</h5>
        <h4>Latest News</h4>
        <p>
          This section is a window into my adventures and solutions in the world
          of code. In each post, I share my experiences from my software
          development process and try to guide my readers through technical
          issues.
        </p>
      </div>
      <div class="blogs-index-area">
        <template v-for="resultBlog in ResultBlog">
          <div data-aos="fade-in" class="blogs-index-card">
            <div class="blogs-index-card-img-area">
              <router-link :to="'/blog-detail/' + resultBlog._id">
                <img class="blogs-index-card-img" :src="resultBlog.mainImg" alt="" />
              </router-link>
            </div>
            <div class="blogs-index-card-text">
              <div class="blogs-index-card-tags">
                <template v-for="element in resultBlog.tags">
                  <h5>{{ element.tagName }}</h5>
                </template>
              </div>
              <router-link :to="'/blog-detail/' + resultBlog._id">{{ resultBlog.title }}</router-link>
              <p>{{ resultBlog.desc }}</p>
            </div>
          </div>
        </template>


      </div>
      <div data-aos="fade-up" class="work-btn">
        <router-link to="/blog">See all posts<i id="work-icon" class="bx bx-right-arrow-alt"></i></router-link>
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
import Loader from '@/components/loader.vue';



export default {
  components: {
    "navbar": Navbar,
    Footer,
    Loader
  },
  data() {
    return {
      json: null,

      homeWork: null,
      ResultExp: null,
      ResultBlog: null,
    }
  },
  mounted() {
    AOS.init({
      duration: 1200,

    });
    loader();
  },
  created() {

    this.fetchHomepage()
    this.fetchWorks()
    this.fetchExp()
    this.fetchBlog()
    this.$store.dispatch('setLoading', true);
  },
  methods: {
    async fetchHomepage() {
      await fetch('https://backend.ahmetselimboz.com.tr/api/homepage')
        .then(response => response.json())
        .then(data => {
          this.json = data.data;
          setTimeout(() => {
            this.$store.dispatch('setLoading', false);
          }, 1000)

        })
        .catch(error => {
          console.error('Veriler getirilirken hata:', error);
        });
    },

    async fetchWorks() {
      await fetch('https://backend.ahmetselimboz.com.tr/api/works')
        .then(response => response.json())
        .then(data => {
          this.homeWork = data.data.slice(0, 4).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


        })
        .catch(error => {
          console.error('Veriler getirilirken hata:', error);
        });
    },
    async fetchExp() {
      await fetch('https://backend.ahmetselimboz.com.tr/api/experiences')
        .then(response => response.json())
        .then(data => {
          this.ResultExp = data.data.slice(0, 3).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));;

        })
        .catch(error => {
          console.error('Veriler getirilirken hata:', error);
        });
    },
    async fetchBlog() {
      await fetch('https://backend.ahmetselimboz.com.tr/api/blogs')
        .then(response => response.json())
        .then(data => {
          this.ResultBlog = data.data.slice(0, 4).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        })
        .catch(error => {
          console.error('Veriler getirilirken hata:', error);
        });
    }

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
