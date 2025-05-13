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
    height: 80vh;
    place-content: center
  }
  #middle {
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
  }

h1, h3 {
  /* background-color: red; */
  color: #9EC8B9;
  padding: 0.5cqi;
}

.myImg {
  /* margin-top: 1em; */
}

.para {

}

.pic {
  width: 24cqi;
  border: solid 5px #9EC8B9;
  border-radius: 7px;
}

.links {
  padding: 0.5cqi
}

a {
  color: #9EC8B9;
  margin: 4px;
}

@media screen and (min-width: 768px) {
  .pic {
    width: 22cqi;
  }
}

@media screen and (max-width: 396px) {
  .pic {
    margin-bottom: 3cqi;
  }

  h3 {
    font-size: large;
  }
}

@media screen and (min-width: 320px) {
  h3 {
    padding: 0 4px;
  }
}

</style>
