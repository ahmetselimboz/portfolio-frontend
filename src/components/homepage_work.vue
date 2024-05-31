<template>
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
        <template v-for="item in variables.result">
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
    const response = await appAxios.get('/works')

    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data

        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>