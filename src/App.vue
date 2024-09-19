<template>
  <navbar-comp/>
  <router-view/>
  <spinner-comp/>
  <footer-comp/>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';

export default {
  components : {
    NavbarComp,
    SpinnerComp,
    FooterComp
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

#app {
  background-image: linear-gradient(#092635, #1B4242, #5C8374, #9EC8B9);
  font-family: "Jacques Francois Shadow", serif;
  
}


</style>

<!-- #092635, #1B4242, #5C8374, #9EC8B9  -->
