<template>
  <Loader />
  <navbar></navbar>
  <section>
    <div class="pages-title-area">
      <h4>{{ $t('Blog') }}</h4>
      <p>
        {{ $t('Blog_Desc') }}
      </p>
    </div>
  </section>
  <section>
    <div class="work-panel">
      <div class="blogs-area">
        <template v-for="resultBlog in variables.result">
          <div class="blogs-card">
            <router-link :to="'/blog/' + resultBlog.slug">
              <div class="blogs-card-img-area">
                <Lazyload class='blogs-card-img'  :url="resultBlog.mainImg"/>
              </div>
            </router-link>
            <div class="blogs-card-text">
              <div class="blogs-card-tags">
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
    </div>
  </section>
  <p style="display: none;">{{ switchStateText }}</p>
  <Footer></Footer>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import Loader from '../components/loader.vue';
import { reactive, inject, onMounted, computed, onBeforeMount } from "vue"
import store from '@/store';
import Lazyload from '@/components/lazyload.vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()


const appAxios = inject("appAxios")

const variables = reactive({
  result: []
})

onMounted(() => {

})

onBeforeMount(() => {
  store.commit("setLoading", true)

  useHead({
    title: t("Blog") + " | Ahmet Selim Boz",
  });
})


const switchStateText = computed(() => {
  const state = store.state; // Access state
  let lang = null
  state.lang == true ? lang = 'TR' : lang = 'EN';
  fetchBlogs(lang)

});


const fetchBlogs = async (lang) => {
  const response = await appAxios.get(`/blogs?lang=${lang}`)

  if (response.data.code == 200) {
    const data = await response.data;
    variables.result = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).filter(item=>item.show == true );


    store.commit("setLoading", false)

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

.blogs-area {
  display: flex;
  /* gap: 20px; */
  margin: 2rem 8rem;
  justify-content: center;
  flex-direction: column;
}

.blogs-card {
  display: flex;
  flex-direction: row;
  margin: 2rem auto;
  width: 80%;
}

.blogs-card-img-area {
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  transform: translate(0, 0px);
  transition: 0.2s ease-in-out;
  box-shadow: #09011031 0 0 10px 3px;
}

.blogs-card a {
  width: 100%;

  display: block;
}
.blogs-card-img {
  width: 100%;
  transform: scale(1.0218);
}
.blogs-card-img-area:hover {
  transform: translate(0, -10px);
}

.blogs-card-text {
  padding: 1rem 0rem;
  margin: 0 1rem;
  width: 100%;
}

.blogs-card-tags {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
}

.blogs-card-text h5 {
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

.blogs-card-text h5:hover {
  background-color: #470089;
}

.blogs-card-text a {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 28px;
  color: var(--black);
  transition: 0.2s ease-in-out;
}
.blogs-card-text a:hover {
  color: var(--purple);
}

.blogs-card-text p {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--gray);
  margin: 0.5rem 0;
  cursor: default;
}

.blogs-btn a {
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
#blogs-icon {
  font-size: 25px;
  transform: translate(0, 0);
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.blogs-btn a:hover #work-icon {
  transform: translate(3px, 0);
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

  .blogs-card-text h5 {
    margin: 0.2rem;
  }

  .blogs-title-area h4 {
    font-size: 35px;
  }

  .blogs-title-area p {
    font-size: 16px;

    width: 80%;
  }

  .blogs-title-area h5 {
    font-size: 15px;
  }

  .blogs-card {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 90%;
  }

  .blogs-area {
    margin: 1rem 0;
  }

  .blogs-card-text {
    padding: 1rem 0rem;
    margin: 0;
    width: 100%;
  }

  .blogs-card-text p {
    font-size: 18px;
  }

  .blogs-btn a {
    font-size: 18px;
    border: 3px solid #470089;
    border-radius: 10px;
    padding: 0.8rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
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

  .blogs-card-text h5 {
    margin: 0.2rem;
  }

  .blogs-title-area h4 {
    font-size: 35px;
  }

  .blogs-title-area p {
    font-size: 16px;

    width: 80%;
  }

  .blogs-title-area h5 {
    font-size: 15px;
  }

  .blogs-card {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 70%;
  }

  .blogs-area {
    margin: 1rem 0;
  }

  .blogs-card-text {
    padding: 1rem 0rem;
    margin: 0;
    width: 100%;
  }

  .blogs-card-text p {
    font-size: 18px;
  }

  .blogs-btn a {
    font-size: 18px;
    border: 3px solid #470089;
    border-radius: 10px;
    padding: 0.8rem;
  }
  .pages-title-area p {

  width: 60%;

}
}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>
