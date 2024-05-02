<template>
  <Loader />
  <navbar></navbar>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <p><i class='bx bx-check'></i>Mesajınızı Aldım :)</p>
    </div>
  </div>
  <section>
    <div class="pages-title-area">
      <h4>Contact</h4>
      <p style="width: 50%">
        If you have any questions or want to work together, you can contact to me.
      </p>
    </div>
  </section>
  <div class="work-panel">
    <form class="contact-form" @submit.prevent="postData">
      <div class="contact-form-area">
        <input class="contact-input" type="text" name="name" v-model="name" id="" placeholder="Name" required />
        <input class="contact-input" type="email" placeholder="Email" name="email" v-model="email" required />
        <textarea name="message" v-model="message" id="" rows="5" placeholder="Message" required></textarea>
      </div>
      <button type="submit" class="contact-button">
        Send Message
      </button>

    </form>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import Loader from '../components/loader.vue';
import loader from '../assets/js';


export default {
  components: {
    "navbar": Navbar,
    Footer,
    Loader
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      responseMessage: '',
      showModal: false,

    }
  },
  created() {
    this.$store.dispatch('setLoading', true);

  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('setLoading', false);
    }, 1000)
  },
  methods: {
    async postData() {
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        };

        const response = await fetch('https://backend.ahmetselimboz.com.tr/api/contact', requestOptions);
        if (response.ok) {
          const responseData = await response.json();
          this.responseMessage = responseData.data;
          this.showModal = true;

          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          throw new Error('HTTP error! Status: ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
        this.responseMessage = 'Bir hata oluştu.';
      }
    },
    closeModal() {
      this.showModal = false;
      // Modal kapatıldığında başka işlemler yapabilirsiniz
    }
  }

}

</script>



<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #f3f3f3;
  width: fit-content;
  height: auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  padding: 1rem 2rem;

}

.modal-content p {
  font-size: 24px;
  font-family: "Roboto", sans-serif !important;
  font-weight: 600 !important;
  color: var(--gray) !important;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.modal-content i {
  font-size: 48px;
  color: #00ff22 !important;
}

.close {
  color: #aaa;
  float: right;
  right: 1%;
  top: 0%;
  font-size: 28px;
  margin-left: 2rem;
  font-weight: bold;
  position: relative;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}










.contact-form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
}

.contact-form-area {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-input {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 100%;
  color: var(--gray);
  margin: 1rem auto;
  padding: 1rem 1rem;
  border: 2px solid var(--gray-faded);
  border-radius: 5px;
}

.contact-input:focus {
  outline: none;
  border: 2px solid var(--purple-faded);
}

.contact-form-area textarea {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 100%;
  color: var(--gray);
  margin: 0.5rem auto;
  padding: 1rem 1rem;
  border: 2px solid var(--gray-faded);
  border-radius: 5px;
}

.contact-form-area textarea:focus {
  outline: none;
  border: 2px solid var(--purple-faded);
}

.contact-button-area {
  margin: 1rem 0;
  width: 100%;
}

.contact-button {
  width: fit-content;
  margin: 2rem auto;
  color: var(--purple);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  border: 3px solid #470089;
  border-radius: 10px;
  padding: 1rem;
  transition: 0.2s ease-in-out;
}

.contact-button:hover {
  background-color: var(--purple);
  color: var(--white);
  border: 3px solid #470089;
}

@media screen and (max-width: 480px) {
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  .contact-button {
    font-size: 14px;
    border: 2px solid #470089;
    padding: 0.8rem 1rem;
  }

  .contact-form-area textarea {
    font-size: 15px;
  }

  .contact-input {
    font-size: 15px;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>
