<template>
  <nav>
    <div class="nav-logo">
      <router-link to="/" class="nav-link">Ahmet Selim Boz</router-link>
    </div>
    <ul class="nav-menu" v-bind:class="{ 'hide': !variables.menuOpen }">
      <li><router-link to="/" class="nav-link">{{ $t('Home') }}</router-link></li>
      <li><router-link to="/works" class="nav-link">{{ $t('Work') }}</router-link></li>
      <li><router-link to="/blogs" class="nav-link">{{ $t('Blog') }}</router-link></li>
      <li><router-link to="/about" class="nav-link">{{ $t('About') }}</router-link></li>
      <li><router-link to="/contact" class="nav-link">{{ $t('Contact') }}</router-link></li>
    </ul>
    <div class="nav-mode">
      <i class="bx" @click="toggleMenu" :class="[variables.menuOpen ? 'bx-x' : 'bx-menu', 'res-nav-color']"
        id="menu"></i>
      <LanguageSwitcher :class="[variables.langOpen ? 'sun' : 'sun2', 'res-nav-color']" />
    </div>
  </nav>
  <div class="res-nav-panel" v-bind:class="{ 'res-nav-toggle': variables.menuOpen }">
    <ul class="res-nav-menu">
      <li><router-link to="/" class="res-nav-link">{{ $t('Home') }}</router-link></li>
      <li><router-link to="/works" class="res-nav-link">{{ $t('Work') }}</router-link></li>
      <li><router-link to="/blogs" class="res-nav-link">{{ $t('Blog') }}</router-link></li>
      <li><router-link to="/about" class="res-nav-link">{{ $t('About') }}</router-link></li>
      <li><router-link to="/contact" class="res-nav-link">{{ $t('Contact') }}</router-link></li>
      <LanguageSwitcher style="margin-top: .8rem;" />
    </ul>
  </div>


</template>

<script setup>
import { reactive } from 'vue';
import LanguageSwitcher from './languageSwitcher.vue';


const variables = reactive({
  menuOpen: false,
  langOpen: false,
})

const toggleMenu = () => {
  variables.menuOpen = !variables.menuOpen;
}


</script>




<!-- <script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script> -->



<style scoped>
.hide {
  display: none;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.nav-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.nav-link {
  font-family: "Poppins", sans-serif;
  padding: 0 2rem;
  font-weight: 700;
  font-size: 20px;
  color: var(--black);
  transition: 0.2s ease-in-out;
}

.nav-link:hover {
  color: var(--gray) !important;
}

.nav-logo {
  margin-left: 40px;
}

.nav-logo a {
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  color: var(--black) !important;
  font-weight: 800;
}

.router-link-active {
  color: var(--purple) !important;
}

.active:hover {
  color: var(--purple) !important;
}

.nav-mode {
  margin-right: 40px;
  display: flex;
  align-items: center;
}

.sun {
  display: none;
  font-size: 25px;
  color: var(--black);
  cursor: pointer;
  transition: 0.2s ease-in-out;

}

.sun2 {
  display: block;
  /* font-size: 25px; */
  color: var(--black);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.sun:hover {
  color: var(--gray);
}

#menu {
  font-size: 25px;
  color: var(--black);
  cursor: pointer;
  display: none;
}

.res-nav-panel {
  background-color: var(--white);
  width: fit-content;
  position: absolute;
  right: 10%;
  padding: 1rem 2rem;
  transform: translate(0px, -20px);
  z-index: 50;
  border-radius: 5px;
  box-shadow: #47008952 0 0 10px 5px;
  display: none;
}

.res-nav-link {
  font-family: "Poppins", sans-serif;
  /* padding: 0 2rem; */
  font-weight: 500;
  font-size: 18px;
  color: var(--black);
  transition: 0.2s ease-in-out;
}

.res-nav-color {
  color: var(--purple) !important;
}

.res-nav-toggle {
  display: block;
}

@media screen and (max-width: 480px) {
  #menu {
    display: block;
    padding: 0 1rem;
  }

  .sun2 {
    display: none
  }

  .nav-menu {
    display: none;
  }

  .nav-logo a {
    font-family: "Poppins", sans-serif;
    font-size: 23px;
    color: var(--black);
    font-weight: 800;
  }

  .nav-logo {
    margin-left: 15px;
  }

  .nav-mode {
    margin-right: 15px;
    display: flex;
  }

  .background {
    background: url("../assets/40.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  #menu {
    display: block;
    padding: 0 1rem;

    font-size: 30px;


  }

  .sun2 {
    display: none
  }

  .nav-menu {
    display: none;
  }

  .nav-logo a {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    color: var(--black);
    font-weight: 800;
  }

  .nav-logo {
    margin-left: 15px;
  }

  .nav-mode {
    margin-right: 15px;
    display: flex;
  }

  .background {
    background: url("../assets/40.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {}

@media screen and (min-width: 1025px) and (max-width: 1200px) {}
</style>