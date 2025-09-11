<template>
  <div id="app">
      <navbar-comp/>
      <router-view/>
      <footer-comp/>
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue'

export default {
  components : {
    NavbarComp,
    FooterComp
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: "Jacques Francois Shadow", serif;
}

#app {
  background: linear-gradient(#092635, #1B4242, #5C8374, #9EC8B9);
  background-size: cover;
  background-repeat:  no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

<!-- #092635, #1B4242, #5C8374, #9EC8B9  -->
