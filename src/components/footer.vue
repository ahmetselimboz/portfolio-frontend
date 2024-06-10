<template>
    <footer class="footer">
        <div class="footer-box">
            <div class="footer-logo-area">
                <h2>Ahmet Selim Boz</h2>
            </div>

            <div class="footer-logo-title">
                <h6>{{ variables.result.title }}</h6>
            </div>
        </div>
        <hr class="now-underline" id="footer-line" />
        <div class="footer-box">
            <ul>
                <li><router-link to="/" class="footer-menu ">{{ $t('Home') }}</router-link></li>
                <li><router-link to="/works" class="footer-menu">{{ $t('Work') }}</router-link></li>
                <li><router-link to="/blogs" class="footer-menu">{{ $t('Blog') }}</router-link></li>
                <li><router-link to="/about" class="footer-menu">{{ $t('About') }}</router-link></li>
                <li><router-link to="/contact" class="footer-menu">{{ $t('Contact') }}</router-link></li>
            </ul>
        </div>
        <hr class="now-underline" id="footer-line" />
        <div class="footer-box">
            <div class="footer-info-box">
                <a :href="variables.result.instagramUrl" target="_blank" class="footer-social">
                    <i class="bx bxl-instagram social-icon"></i>
                    <h3 class="footer-h3">Instagram</h3>
                </a>
                <a :href="variables.result.TwitterUrl" target="_blank" class="footer-social">
                    <i class="bx bxl-twitter social-icon"></i>
                    <h3 class="footer-h3">Twitter</h3>
                </a>
                <a :href="variables.result.linkedinUrl" target="_blank" class="footer-social">
                    <i class="bx bxl-linkedin-square social-icon"></i>
                    <h3 class="footer-h3">Linkedln</h3>
                </a>
                <a :href="'mailto:' + variables.result.mail" class="footer-social">
                    <i class="bx bx-envelope social-icon"></i>
                    <h3 class="footer-h3">{{ variables.result.mail }}</h3>
                </a>
            </div>
        </div>
    </footer>
    <div  class="footer-bottom">
        <h4> 
            {{ variables.date }} © <a :href="variables.result.linkedinUrl" target="_blank">Ahmet Selim Boz</a>
        </h4>
    </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, reactive, inject } from 'vue';

const appAxios = inject("appAxios")

const variables = reactive({
    result: {},
    date:null
})

onMounted(() => {
    fetchHomepage()
    variables.date = new Date().getFullYear()
    AOS.init({
        duration: 1200,
    });


})

const fetchHomepage = async () => {
    const response = await appAxios.get('/footer')
  
    if (response.data.code == 200) {
        const data = await response.data;
        variables.result = data.data

        return true
    } else {
        console.error("Something went wrong!");
    }
}
</script>


<!-- <script>
export default {
    data() {
        return {
            footerResult: null
        }
    },
    created() {
        self = this

        fetch('https://backend.ahmetselimboz.com.tr/api/footer')
            .then(response => response.json())
            .then(data => {
                self.footerResult = data.data;

            })
            .catch(error => {
                console.error('Veriler getirilirken hata:', error);
            });
    }
}

</script> -->


<style scoped>
.router-link-active {
    color: var(--purple) !important;
}

.footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem 3rem;
    border-top: 3px solid #470089;
    border-bottom: 3px solid #470089;
}

.footer-box {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 3rem;
}

.footer-logo-area {
    margin: 0.5rem 0;
}

.footer-logo-area h2 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    color: var(--black);
    font-weight: 800;
}

.footer-underline {
    border: none;
    border-top: 0.15rem solid #1616169a;
    width: 70%;
    text-align: center;
    border-radius: 5px;
    margin: 1rem auto;
}

.footer-logo-title {
    padding: 0rem 0;
    text-align: center;
}

.footer-logo-title h6 {
    font-size: 20px;
    font-weight: 400;
    color: var(--gray);
    transition: 0.2s ease-in-out;
}

.footer-box ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-box ul li {
    margin: 1rem 0;
}

.footer-menu {
    font-family: "Poppins", sans-serif;
    padding: 0 2rem;
    font-weight: 700;
    font-size: 20px;
    color: var(--black);
    transition: 0.2s ease-in-out;
}

.footer-menu:hover {
    color: var(--gray);
}

.footer-info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.footer-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    transition: 0.2s ease-in-out;
}

.social-icon {
    color: #470089;
    font-size: 32px;
    padding: 0 0.5rem;
    transform: translate(0, 0);
    transition: 0.2s ease-in-out;
}

.footer-h3 {
    color: var(--gray);
    font-size: 17px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    transition: 0.1s ease-in-out;
}

.footer-social:hover .footer-h3 {
    color: var(--black);
}

.footer-social:hover .social-icon {
    transform: translate(0, -5px);
}

.footer-bottom {
    background-color: #470089;
    width: 100%;
    height: auto;
    text-align: center;
}

.footer-bottom h4 {
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    padding: 1rem 0;
}

.footer-bottom a {
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    padding: 1rem 0;
}

#footer-line {
    display: none;
    margin: 1rem;
}

@media screen and (max-width: 480px) {
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 1rem;
    }

    .footer-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
    }

    .footer-info-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
    }

    .footer-social {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        margin: 0.5rem 0;
        transition: 0.2s ease-in-out;
    }

    .footer-logo-area h2 {
        font-family: "Poppins", sans-serif;
        font-size: 35px;
        color: var(--black);
        font-weight: 800;
    }

    .social-icon {
        color: #470089;
        font-size: 32px;
        padding: 0.5rem;
        transform: translate(0, 0);
        transition: 0.2s ease-in-out;
        border: 2px solid #470089;
        border-radius: 50%;
    }

    .footer-h3 {
        display: none;
    }

    .footer-social:hover .footer-h3 {
        color: var(--black);
    }

    .footer-social:hover .social-icon {
        transform: translate(0, -5px);
    }

    #footer-line {
        display: block;
    }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>