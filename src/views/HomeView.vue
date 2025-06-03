<template>
  <div class="home">
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
</template>

<script>

export default {
  data() {
    return {
      imgUrl: "https://yonelamangele.github.io/Images/20240422_122539.jpg"
    }
  },
}
</script>

<style scoped>
  .home {
    margin: 7em 0 8em;
    place-content: center
    
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

@media screen and (max-width: 768px) {
  .home {
    margin: 10em 0 14em;
  }
  
  .pic {
    width: 22cqi;
  }
}

@media screen and (max-width: 620px) {
  .home {
    margin: 3.3em 0;
  }
  #middle {
    flex-direction: column;
  }

  .myImg {
    margin-bottom: 35px;
  }
}

@media screen and (max-width: 426px) {
  .pic {
    width: 150px;
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
    height: 60vh;
  }

  .pic {
    margin-bottom: 3cqi;
  }

  h3 {
    font-size: large;
  }
}

</style>
