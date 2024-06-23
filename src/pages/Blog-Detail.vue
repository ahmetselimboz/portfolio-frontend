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
                    <Lazyload class='' :url="variables.result.mainImg" />
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
                                <Lazyload class='blogs-card-img' :url="data.mainImg" />
                                <!-- <img class="blogs-card-img" :src="data.mainImg" alt="" /> -->
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
import Loader from '../components/loader.vue';
import Footer from '../components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { computed, inject, onBeforeMount, onMounted, reactive, watch } from 'vue';
import { useRoute } from "vue-router"
import store from '@/store';
import { useHead } from '@vueuse/head';
import Lazyload from '@/components/lazyload.vue';

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


onBeforeMount(() => {
    store.commit("setLoading", true)
})

const switchStateText = computed(() => {
    const state = store.state; // Access state
    let lang = null
    state.lang == true ? lang = 'TR' : lang = 'EN';
    fetchWorks(lang)

});



function getLastSixCharacters(str) {
    return str.slice(-6);
}

const fetchWorks = async (lang) => {
    const response = await appAxios.get(`/blogs/${getLastSixCharacters(route.params.slug)}?lang=${lang}`)

    const tagArray = []
    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data.result
        variables.Data = data.data.data
        variables.result.tags.forEach(element => {
            tagArray.push(element.tagName)
        });
 
        useHead({
            title: variables.result.title,
            meta: [
                { name: 'description', content: variables.result.desc.slice(0, 100) },
                { property: 'og:title', content: variables.result.title },
                { property: 'og:description', content: variables.result.desc.slice(0, 100) },
                { property: 'og:image', content: variables.result.mainImg },
                { property: 'og:url', content: "Ahmet Selim Boz" },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: variables.result.title },
                { name: 'twitter:description', content: variables.result.desc.slice(0, 100) },
                { name: 'twitter:image', content: variables.result.mainImg },
                { name: 'keywords', content: tagArray },
            ]
        });



        store.commit("setLoading", false)


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