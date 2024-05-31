<template>
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
        <template v-for="resultBlog in variables.result">
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
    const response = await appAxios.get('/blogs')

    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data

        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>