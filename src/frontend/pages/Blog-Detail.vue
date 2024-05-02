<template>
    <Loader />
    <navbar></navbar>
    <section>
        <div class="blog-panel">
            <div class="blog-area">
                <div class="blog-tag">
                    <template v-for="element in result.tags">
                        <a>{{ element.tagName }}</a>
                    </template>
                </div>
                <div class="blog-title">
                    <h5>{{ result.title }}</h5>
                </div>
                <div class="blog-letter">
                    <h4>{{ result.desc }}</h4>
                </div>
                <div class="blog-main-img">
                    <img :src="result.mainImg" alt="" />
                </div>

                <div class="blog-content">
                    <div v-html="result.content">

                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr data-aos="fade-up" class="now-underline" />
    <section>
        <div class="work-panel">
            <div data-aos="fade-up" class="section-title">
                <h3>Releated Posts</h3>
                <hr class="section-title-line" />
            </div>
            <div class="blogs-area">
                <template v-for="data in Data">
                    <div class="blogs-card js-scroll fade-in">
                        <a href="">
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

                            <a href="">{{ data.title }}</a>
                            <p>{{ data.desc }}</p>
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
import Loader from '../components/loader.vue';
import Footer from '../components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default {
    props: ['id'],
    components: {
        "navbar": Navbar,
        Footer,
        Loader
    },
    data() {
        return {
            result: "",
            Data: "",
            userId: null
        }
    },
    mounted() {
        AOS.init({
            duration: 1200,
        });
        this.userId = this.id;

    },
    created() {
        this.fetchWorks(this.id)
        this.$store.dispatch('setLoading', true);
        
    },
    methods: {
        async fetchWorks(userId) {
            await fetch(`https://backend.ahmetselimboz.com.tr/api/blogs/${userId}`)
                .then(response => response.json())
                .then(data => {
                    this.result = data.data.result
                    this.Data = data.data.data
                    
                    document.getElementById('pageTitle').innerText = this.result.title;
                    document.querySelector('meta[property="og:title"]').setAttribute('content', this.result.title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', this.result.desc);
                    setTimeout(() => {
                        this.$store.dispatch('setLoading', false);
                    }, 1000)
                })
                .catch(error => {
                    console.error('Veriler getirilirken hata:', error);
                });
        },
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