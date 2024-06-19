<template>
    <section>
    <div class="work-panel">
      <div data-aos="fade-up" class="work-title-area ">
        <h5>{{ $t('Blogs') }}</h5>
        <h4>{{ $t('Latest_News') }}</h4>
        <p>
          {{ $t('Latest_News_Desc') }}
        </p>
      </div>
      <div class="blogs-index-area">
        <template v-for="resultBlog in variables.result">
          <div data-aos="fade-in" class="blogs-index-card">
            <div class="blogs-index-card-img-area">
              <router-link :to="'/blog/' + resultBlog.slug">
                <Lazyload class='blogs-index-card-img'  :url="resultBlog.mainImg"/>
               
              </router-link>
            </div>
            <div class="blogs-index-card-text">
              <div class="blogs-index-card-tags">
                <template v-for="element in resultBlog.tags">
                  <h5>{{ element.tagName }}</h5>
                </template>
              </div>
              <router-link :to="'/blog/' + resultBlog.slug">{{ resultBlog.title }}</router-link>
              <p>{{ resultBlog.desc }}</p>
            </div>
          </div>
        </template>


      </div>
      <div data-aos="fade-up" class="work-btn">
        <router-link to="/blogs">{{ $t('See_All_Posts') }}<i id="work-icon" class="bx bx-right-arrow-alt"></i></router-link>
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
import Lazyload from './lazyload.vue';


const appAxios = inject("appAxios")

const variables = reactive({
    result: {}
})

onMounted(() => {


    AOS.init({
        duration: 800,
    });


})

const switchStateText = computed(async () => {
  const state = store.state; // Access state
  let lang = null
  state.lang == true ? lang = 'TR' : lang = 'EN';
  await fetchHomepage(lang)
});

const fetchHomepage = async (lang) => {
    const response = await appAxios.get(`/blogs?lang=${lang}`)

    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).filter(item=>item.show == true );;

        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>

<style>
.blogs-index-area {
  display: flex;
  margin: 2rem 8rem;
  flex-wrap: wrap;
  justify-content: center;
}

.blogs-index-card {
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  width: 45%;
}

.blogs-index-card-img-area {
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  transform: translate(0, 0px);
  transition: 0.2s ease-in-out;
  box-shadow: #09011031 0 0 10px 3px;
}

.blogs-index-card a {
  width: 100%;

  display: block;
}
.blogs-index-card-img {
  width: 100%;
  transform: scale(1.0218);
}
.blogs-index-card-img-area:hover {
  transform: translate(0, -10px);
}

.blogs-index-card-text {
  padding: 1rem 0rem;
  margin: 0;
  width: 100%;
}

.blogs-index-card-tags {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
}

.blogs-index-card-text h5 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin: 0.2rem;
  background-color: #8080809d;
  padding: 0.1rem 0.4rem;
  color: white;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
}

.blogs-index-card-text h5:hover {
  background-color: #470089;
}

.blogs-index-card-text a {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 28px;
  color: var(--black);
  transition: 0.2s ease-in-out;
}
.blogs-index-card-text a:hover {
  color: var(--purple);
}

.blogs-index-card-text p {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--gray);
  margin: 0.5rem 0;
  cursor: default;
}

.blogs-index-btn a {
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
#blogs-index-icon {
  font-size: 25px;
  transform: translate(0, 0);
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.blogs-index-btn a:hover #work-icon {
  transform: translate(3px, 0);
}

@media screen and (max-width: 480px) {
  .blogs-index-card-text h5 {
    margin: 0.2rem;
  }

  .blogs-index-title-area h4 {
    font-size: 35px;
  }

  .blogs-index-title-area p {
    font-size: 16px;

    width: 80%;
  }

  .blogs-index-title-area h5 {
    font-size: 15px;
  }

  .blogs-index-card {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 90%;
  }

  .blogs-index-area {
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .blogs-index-card-text {
    padding: 1rem 0rem;
    margin: 0;
    width: 100%;
  }

  .blogs-index-card-text p {
    font-size: 18px;
  }

  .blogs-index-btn a {
    font-size: 18px;
    border: 3px solid #470089;
    border-radius: 10px;
    padding: 0.8rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .blogs-index-card-text h5 {
    margin: 0.2rem;
  }

  .blogs-index-title-area h4 {
    font-size: 35px;
  }

  .blogs-index-title-area p {
    font-size: 16px;

    width: 80%;
  }

  .blogs-index-title-area h5 {
    font-size: 15px;
  }

  .blogs-index-card {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 60%;
  }

  .blogs-index-area {
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .blogs-index-card-text {
    padding: 1rem 0rem;
    margin: 0;
    width: 100%;
  }

  .blogs-index-card-text p {
    font-size: 18px;
  }

  .blogs-index-btn a {
    font-size: 18px;
    border: 3px solid #470089;
    border-radius: 10px;
    padding: 0.8rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
}
</style>