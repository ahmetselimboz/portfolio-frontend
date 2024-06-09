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
                <img class="blogs-index-card-img" :src="resultBlog.mainImg" alt="" />
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
        <router-link to="/blog">{{ $t('See_All_Posts') }}<i id="work-icon" class="bx bx-right-arrow-alt"></i></router-link>
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
        variables.result = data.data

        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>