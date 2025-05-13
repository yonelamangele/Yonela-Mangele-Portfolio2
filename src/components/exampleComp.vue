<template>
    <div class="container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
</template>
<script setup>
    
</script>
<style lang="css" scoped>

    div {
        font-size: 3rem;
        color: white;
    }

    .container {
  display: flex;
  gap: 0.5rem;
  border: 2px black solid;

  & div {
    width: 6rem;
    height: 6rem;
  }

  & div:nth-child(1) {
    background-color: red;
    position: relative;
    top: 2rem;
  }

  & div:nth-child(2) {
    background-color: orange;
  }

  & div:nth-child(3) {
    background-color: yellow;
  }

  & div:nth-child(4) {
    background-color: green;
  }

  & div:nth-child(5) {
    background-color: blue;
  }

  & div:nth-child(6) {
    background-color: indigo;
  }

  & div:nth-child(7) {
    background-color: violet;
  }

  & div:nth-child(8) {
    background-color: pink;
  }
}

</style>