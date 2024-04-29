<template>
  <nav>
      <div class="nav-logo">
        <a href=""> Ahmet Selim Boz </a>
      </div>
      <ul class="nav-menu">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/work" class="nav-link">Work</router-link></li>
        <li><router-link to="/blog" class="nav-link">Blog</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
      <div class="nav-mode">
        <i class="bx bx-menu" id="menu"></i>
        <i class="bx bx-sun" id="sun"></i>
      </div>
    </nav>
    <div class="res-nav-panel">
      <ul class="res-nav-menu">
        <li><router-link to="/" class="res-nav-link">Home</router-link></li>
        <li><router-link to="/work" class="res-nav-link">Work</router-link></li>
        <li><router-link to="/blog" class="res-nav-link">Blog</router-link></li>
        <li><router-link to="/about" class="res-nav-link">About</router-link></li>
        <li><router-link to="/contact" class="res-nav-link">Contact</router-link></li>
      </ul>
    </div>
   
</template>



<script>

</script>



<style scoped>
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
  color: var(--black);
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

#sun {
  display: none;
  font-size: 25px;
  color: var(--black);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

#sun:hover {
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
  right: 13%;
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
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
}
</style>