<template>
  <div class="home">
    <div v-if="isLoading" class="preloader-wrapper">
      <spinner-comp />
    </div>
    
    <div v-else>
      <div id="middle">
        <div class="myImg">
          <img :src="imgUrl" alt="" class="pic">
        </div>
      
        <div class="para">
          <h1> <b> Yonela Mangele </b> </h1>
          <h3> An Aspiring Front-End Developer </h3>
          <div class="links">
            <a href="https://github.com/yonelamangele" target="_blank"> <i class="fa-brands fa-github fa-2x"></i> </a> 
            <a href="https://www.linkedin.com/in/yonela-mangele-125044316/" target="_blank"> <i class="fa-brands fa-linkedin fa-2x"></i> </a>
            <a href="https://za.pinterest.com/yonelamangele/" target="_blank"> <i class="fa-brands fa-pinterest fa-2x"></i> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SpinnerComp from '../components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  data() {
    return {
      imgUrl: "https://yonelamangele.github.io/github-images/oie_21426114tE129UH.png",
      isLoading: true
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000)
    })
  }
}
</script>

<style scoped>
  
  .preloader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    background: #5C8374;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .home {
    margin: 6.95em 0 6.95em;
    place-content: center;
    /* height: 35vh */
  }

  #middle {
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    
  }

  .para {
    justify-items: center;
  }

h1 {
  width: 45cqi;
  background-color: #092635;
  color: #9EC8B9;
  border-radius: 8px;
  box-shadow: 0 2px 9px #9EC8B9;
  padding: 0 0 7px 0;
}

h3 {
  width: 35cqi;
  background-color: #092635;
  color: #9EC8B9;
  border-radius: 8px;
  box-shadow: 0 2px 9px #9EC8B9;
  margin: 20px 0;
}

.pic {
  width: 19cqi;
  border: solid 5px #9EC8B9; 
  border-radius: 7px;
}

.links {
  padding: 0.2em 0.2cqi;
  background-color: #092635;
  width: 190px;
  border-radius: 8px;
  box-shadow: 0 2px 9px #9EC8B9;
}

a {
  padding: 1em 0.3em;
  color: #9EC8B9;
  margin: 4px;
}

/* @media screen and (min-width: 1440px) {
  .home {
    height: 38vh !important;
    margin: 10em 0 5.5em !important
  }
} */

@media screen and (max-width: 1024px) {
  .home {
    height: 34vh !important;
    margin: 9.2em 0 6em !important
  }

  #middle {
    height: 240px;
  }
  
  .pic {
    width: 22cqi;
  }
}

@media screen and (max-width: 920px) {
  .pic {
    width: 28cqi;
  }
}

@media screen and (max-width: 768px) {
  .home {
    margin: 9.2em 0 7.5em !important
  }
}

@media screen and (max-width: 620px) {
  #middle {
    flex-direction: column;
  }
  
  .myImg {
    margin-bottom: 35px;
  }
}

@media screen and (max-width: 426px) {
  .home {
    height: 58.5vh !important;
    margin: 1.9em 0 4.9em !important
  }

  #middle {
    margin-top: -65px;
  }

  .pic {
    width: 40cqi
  }
  
  h1 {
    width: 280px;
  }
  
  h3 {
    padding: 0 4px;
    width: 240px;
  }
  
  .links {
    width: 150px;
  }
  
  a {
    font-size: 10px;
  }
}

@media screen and (max-width: 396px) { 
  .home {
    margin: 3.5em 0 4.1em !important
  }

  .pic {
    margin-bottom: 3cqi;
  }

  h3 {
    font-size: large;
  }
}

@media screen and (max-width: 321px) {
  .pic {
    width: 10em
  }
}

</style>