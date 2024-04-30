<template>
    <Loader />
    <navbar></navbar>
    <div class="work-panel">
        <div class="work-detail-area">
            <div class="work-detail-img-area">
                <img class="work-detail-img" :src="result.mainImg" alt="" />
            </div>
            <div class="work-detail-text-area">
                <h6>{{ result.tag }}</h6>
                <h2>{{ result.name }}</h2>
                <p>{{ result.text }}</p>
                <div class="work-detail-part">
                    <i class="bx bx-caret-right caret-right"></i>
                    <h3>Date:</h3>
                    <h4>{{ result.date }}</h4>
                </div>
                <div class="work-detail-part">
                    <i class="bx bx-caret-right caret-right"></i>
                    <h3>Technologies:</h3>
                    <h4>{{ result.lang }}</h4>
                </div>

                <div class="work-detail-part">
                    <i class="bx bx-caret-right caret-right"></i>
                    <h3>Link:</h3>
                    <h4>
                        <a :href="'https://' + result.link" target="_blank">{{ result.link }}</a>
                    </h4>
                </div>
            </div>
        </div>
        <div class="work-detail-desc">
            <h1 id="text1">{{ result.desc }}</h1>
        </div>
    </div>
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
            await fetch(`https://backend.ahmetselimboz.com.tr/api/works/${userId}`)
                .then(response => response.json())
                .then(data => {
                    this.result = data.data
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

<style scoped>
.work-detail-area {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin: 2rem 6rem;
}

.work-detail-img-area {
    max-width: 60%;
    flex: 1 0 300px;
}

.work-detail-text-area {
    max-width: 40%;
    flex: 1 0 300px;
}

.work-detail-img {
    width: 100%;
    border-radius: 5px;
    box-shadow: #00000036 0 0 10px 5px;
}

.work-detail-text-area {
    margin: 0 2rem;
}

.work-detail-text-area h6 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: var(--gray);
}

.work-detail-text-area h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 40px;
    color: var(--black);
    margin: 1rem 0;
}

.work-detail-text-area p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: var(--gray);
    margin: 0.5rem 0;
}

.work-detail-part {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.2rem 0;
}

.work-detail-part h3 {
    margin: 0 0.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: var(--black);
}

.work-detail-part h4 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: var(--gray);
}

.work-detail-part a {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: var(--purple);
    border-bottom: 2px solid #00000000;
    transition: 0.2s ease-in-out;
}

.work-detail-part a:hover {
    border-bottom: 2px solid var(--purple);
}

.caret-right {
    font-size: 18px;
    color: #d5d5d5;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #470089;
}

.work-detail-desc {
    margin: 5rem 4rem;
}

.work-detail-desc h1 {
    width: 70%;
    margin: 0 auto;
    font-family: "Roboto", sans-serif !important;
    font-weight: 400 !important;
    font-size: 20px !important;
    color: var(--gray) !important;
}

@media screen and (max-width: 480px) {
    .work-detail-area {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        margin: 2rem 0rem;
    }

    .work-detail-img-area {
        max-width: 100%;
        flex: 0 380px;
    }

    .work-detail-text-area {
        max-width: 100%;
        flex: 0 380px;
    }

    .work-detail-text-area {
        margin: 2rem 0;
    }

    .work-detail-text-area h6 {
        font-size: 15px;
    }

    .work-detail-text-area h2 {
        font-size: 28px;
        margin: 0.5rem 0;
    }

    .work-detail-text-area p {
        font-size: 18px;

        margin: 0.5rem 0;
    }

    .work-detail-part {
        margin: 1.2rem 0;
    }

    .work-detail-part h3 {
        margin: 0 0.5rem;

        font-size: 16px;
    }

    .work-detail-part h4 {
        font-size: 16px;
    }

    .work-detail-part a {
        font-size: 16px;
    }

    .caret-right {
        font-size: 16px;

        -webkit-text-stroke-width: 2px;
    }

    .work-detail-desc {
        margin: 3rem 0rem;
    }

    .work-detail-desc h1 {
        font-size: 18px;

        width: 100%;
        margin: 0 auto;
    }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>