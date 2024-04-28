<template>
 
 <navbar></navbar>
  <h2>About page</h2>
</template>



<script >
import Navbar from '../components/navbar.vue'



export default {
  components: {
    "navbar": Navbar,
    
  },
  data() {
    return {

    }
  }
}
</script>



<style scoped>
.main-panel {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
}

.main-text-area {
  width: 60%;
  margin-left: 2.5rem;
}

.main-text {
  margin: 1rem 0rem 1rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
}

.main-title-area {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.main-title-area h4 {
  color: var(--purple);
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: transparent;
  font-size: 64px;
  font-weight: 600;
}

.main-title-img {
  width: 20%;
  margin: 0.5rem 0rem;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: #47008975 0 0 10px 3px;
  overflow: hidden;
}

.main-title-img img {
  width: 100%;
}

.main-text h3 {
  font-family: "Poppins", sans-serif;
  color: var(--black);
  font-size: 70px;
  font-weight: 800;
}

.main-text h6 {
  font-size: 24px;
  width: 70%;
  font-weight: 400;
  margin: 0.5rem 0;
  color: var(--gray);
}

.main-img-area {
  width: 40%;
}

.main-img {
  width: 70%;
  transition: 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: #0901103f 15px 15px 10px 5px;
}

.main-img-img {
  width: 100%;
  border-radius: 5px;
  height: inherit;
  transition: 0.2s ease-in-out;
  transform: scale(1.015);
}

.main-img-img:hover {
  transform: scale(1.13);
}

.main-img:hover {
  box-shadow: #09011055 15px 15px 10px 5px;
}

@media screen and (max-width: 480px) {
  .main-panel {
    display: flex;
    flex-direction: column;
    margin: 2rem 1.2rem;
  }
  .main-img-area {
    width: 100%;
  }

  .main-text-area {
    width: 100%;
    margin-left: 0rem;
    margin-bottom: 50px;
  }

  .main-text {
    margin: 1rem 0rem 1rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 85%;
  }

  .main-title-img {
    box-shadow: #47008963 0 0 10px 3px;
  }

  .main-title-area h4 {
    font-size: 30px;
    margin-top: 25px;
    color: var(--black);
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: transparent;
    font-weight: 800;
  }

  .main-text h3 {
    font-size: 35px;
  }
  .main-text h6 {
    font-size: 20px;
    width: 100%;
  }

  .main-img {
    width: 85%;
    box-shadow: #0901103f 10px 15px 10px 5px;
    margin: 0 auto;
  }

  .main-img:hover {
    box-shadow: #09011055 10px 15px 10px 5px;
  }

  .main-img-img {
    transform: scale(1.02);
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
}


</style>
