<template>
    <Loader />
    <navbar></navbar>
    <section>
        <div class="blog-panel">
            <div class="blog-area">
                <div class="blog-tag">
                    <template v-for="element in variables.result.tags">
                        <a>{{ element.tagName }}</a>
                    </template>
                </div>
                <div class="blog-title">
                    <h5>{{ variables.result.title }}</h5>
                </div>
                <div class="blog-letter">
                    <h4>{{ variables.result.desc }}</h4>
                </div>
                <div class="blog-main-img">
                    <img :src="variables.result.mainImg" alt="" />
                </div>

                <div class="blog-content">
                    <div v-html="variables.result.content">

                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr data-aos="fade-up" class="now-underline" />
    <section>
        <div class="work-panel">
            <div data-aos="fade-up" class="section-title">
                <h3>{{ $t('Releated_Posts') }}</h3>
                <hr class="section-title-line" />
            </div>
            <div class="blogs-area">
                <template v-for="data in variables.Data">
                    <div data-aos="fade-in" class="blogs-card">
                        <a :href="'/blog/' + data.slug">
                            <div class="blogs-card-img-area">
                                <img class="blogs-card-img" :src="data.mainImg" alt="" />
                            </div>
                        </a>
                        <div class="blogs-card-text">
                            <div class="blogs-card-tags">
                                <template v-for="element in data.tags">
                                    <h5>{{ element.tagName }}</h5>
                                </template>
                            </div>

                            <a :href="'/blog/' + data.slug">{{ data.title }}</a>
                            <p>{{ data.desc }}</p>
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
// import Loader from '../components/loader.vue';
import Footer from '../components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { computed, inject, onMounted, reactive, watch } from 'vue';
import { useRoute } from "vue-router"
import store from '@/store';
import { useHead } from '@vueuse/head';

const route = useRoute()
const appAxios = inject("appAxios")


const variables = reactive({
    result: "",
    Data: "",
})

onMounted(() => {
    AOS.init({
        duration: 1200,
    });


})

const switchStateText = computed(() => {
    const state = store.state; // Access state
    let lang = null
    state.lang == true ? lang = 'TR' : lang = 'EN';
    fetchWorks(lang)

    // watch(variables.result, (newBlog) => {
    //     if (newBlog) {
    //         useMeta({
    //             title: newBlog.title,
    //             meta: [
    //                 { property: 'og:title', content: newBlog.title },
    //                 { property: 'og:description', content: newBlog.desc.slice(0, 100) },
    //                 { property: 'og:image', content: newBlog.mainImg },
    //                 { property: 'og:url', content: window.location.href },
    //                 { name: 'twitter:card', content: 'summary_large_image' },
    //                 { name: 'twitter:title', content: newBlog.title },
    //                 { name: 'twitter:description', content: newBlog.desc.slice(0, 100) },
    //                 { name: 'twitter:image', content: newBlog.mainImg }
    //             ]
    //         });
    //     }
    // }, { immediate: true });

});



function getLastSixCharacters(str) {
    return str.slice(-6);
}

const fetchWorks = async (lang) => {
    const response = await appAxios.get(`/blogs/${getLastSixCharacters(route.params.slug)}?lang=${lang}`)

    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data.result
        variables.Data = data.data.data

        document.getElementById('pageTitle').innerText = variables.result.title;
        
        useHead({
            title: variables.result.title,
            meta: [
                { name: 'description', content: variables.result.desc.slice(0, 100) },
                { property: 'og:title', content: variables.result.title },
                { property: 'og:description', content: variables.result.desc.slice(0, 100) },
                { property: 'og:image', content: variables.result.mainImg },
                { property: 'og:url', content: window.location.href },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: variables.result.title },
                { name: 'twitter:description', content: variables.result.desc.slice(0, 100) },
                { name: 'twitter:image', content: variables.result.mainImg }
            ]
        });
        
        return true
    } else {
        console.error("Something went wrong!");
    }
}

</script>





<style>
.blog-panel {
    margin: 1rem 0;
    padding: 2rem 1rem;
}

.blog-area {
    display: flex;
    flex-direction: column;
}

.blog-tag {
    display: flex;
    flex-direction: row;
    width: 60%;
    margin: 0.5rem auto;
    flex-wrap: wrap;
}

.blog-tag a {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: var(--gray);
    margin: 0.2rem 0.5rem;
    transition: 0.2s ease-in-out;
    background-color: #ececec;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
}

.blog-tag a:hover {
    background-color: #dcdcdc;
    color: var(--purple);
}

.blog-title h5 {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 56px;
    color: var(--purple);
    width: 60%;
    margin: 0.5rem auto;
}

.blog-letter h4 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    width: 60%;
    color: var(--gray);
    margin: 0.5rem auto;
}

.blog-main-img {
    width: 50%;
    margin: 2rem auto;
    border-radius: 5px;
    box-shadow: #00000036 0 0 10px 5px;
    overflow: hidden;
}

.blog-main-img img {
    width: 100%;
}

.blog-content {
    width: 60%;
    margin: 0 auto;
}

.blog-content img {
    width: 90% !important;
}

.blog-content li {
    list-style: inherit !important;
}

.blog-content a {
    color: #337ab7 !important;
    text-decoration: none;
}

.blog-content a:hover {
    color: #337ab7 !important;
    text-decoration: underline;
}

@media screen and (max-width: 480px) {
    .blog-panel {
        margin: 1rem 0;
        padding: 1rem;
    }

    .blog-letter h4 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 20px;
        width: 90%;
    }

    .blog-main-img {
        width: 80%;
        margin: 2rem auto;
        border-radius: 5px;
        box-shadow: #00000036 0 0 10px 5px;
        overflow: hidden;
    }

    .blog-main-img img {
        width: 100%;
    }

    .blog-title h5 {
        font-size: 35px;
        width: 100%;
        text-align: center;
    }

    .blog-tag {
        width: 100%;
        margin: 0.2rem 0;
    }

    .blog-tag a {
        font-size: 14px;

        margin: 0.3rem;

        padding: 0.2rem 0.5rem;
    }

    .blog-content {
        width: 90%;
        margin: 0 auto;
    }

    .blog-content img {
        width: 100% !important;
    }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>