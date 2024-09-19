<template>
  <div class="home">
    <div class="myImg">
      <img :src="imgUrl" alt="" class="pic">
    </div>
    <div class="para">
      <h1> Welcome To My Portfolio </h1>
      <h3> My Name Is </h3>
      <h1> <b> Yonela Mangele </b> </h1>
      <h3> An Aspiring Web Developer </h3>
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
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
h1, h3 {
  color: #092635;
}

.myImg {
  margin-top: 2em;
  padding-bottom: 2em;
}

.para {
  margin-bottom: 10px;
}

.pic {
  width: 400px;
  border: solid 5px #9EC8B9;
  border-radius: 7px;
}

</style>
