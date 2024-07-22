<template>
  <section>
    <div class="work-panel">
      <div class="work-title-area">
        <h5>{{ $t('Portfolio') }}</h5>
        <h4>{{ $t('Check_My_Works') }}</h4>
        <p>
          {{ $t('Check_My_Works_Desc') }}
        </p>
      </div>
      <div class="work-area">
        <template v-for="item in variables.result">
          <div  class="work-card">
            <div class="work-card-img-area">
              <router-link :to="'/work/' + item.slug">
                <Lazyload class='work-card-img'  :url="item.mainImg"/>
              </router-link>
            </div>
            <div class="work-card-text">
              <h5>{{ item.tag }} </h5>
              <router-link :to="'/work/' + item.slug">{{ item.name }}</router-link>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </template>
      </div>
      <div class="work-btn">
        <router-link to="/works">{{ $t('See_All_Works') }}<i id="work-icon" class="bx bx-right-arrow-alt"></i></router-link>
      </div>
    </div>
  </section>
  <p style="display: none;">{{ switchStateText }}</p>
</template>

<script setup>
import store from '@/store';
import { onMounted, reactive, inject, computed } from 'vue';
import Lazyload from './lazyload.vue';


const appAxios = inject("appAxios")

const variables = reactive({
    result: {}
})

onMounted(() => {
    



})

const switchStateText = computed(async () => {
  const state = store.state; // Access state
  let lang = null
  state.lang == true ? lang = 'TR' : lang = 'EN';

  await fetchHomepage(lang)
});

const fetchHomepage = async (lang) => {
    const response = await appAxios.get(`/works?lang=${lang}`)

    if (response.data.code == 200) {
        const data = await response.data;
        console.log(data)
        variables.result = data.data.splice(-4).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>