<template>
  <div class="resume">
    <resume-comp>
      <h1> My Education </h1>
      
      <div class="timeline" v-if="resume">
        <div
        class="container"
        v-for="(item, index) in resume"
        :key="index"
        :class="index % 2 === 0 ? 'left-container' : 'right-container'"
        >
        <img :src="item.image" alt="company" />
        <div class="text-box">
          <h3>{{ item.placeOfInstitution }}</h3>
          <small> <b>{{ item.year }} </b> </small>
          <p>{{ item.description }}</p>
          <span :class="index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'"></span>
        </div>
      </div>
    </div>
    
    <div class="btn">
      <a href="https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/cv/My%20CV.pdf" target="_blank"> View CV </a>
    </div>
      
    </resume-comp>
  </div>
</template>

<script>
export default {
  name: 'ResumeTimeline',
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  },
  mounted() {
    if (!this.resume) {
      this.$store.dispatch('getResume');
    }
  }
};
</script>

<style scoped>
.resume {
  text-align: center;
  justify-content: center;
  margin: 5em 0 7em;
  color: #9EC8B9;
}

h1 {
  background-color: #9EC8B9;
  color: #092635;
  border-radius: 8px;
  margin: auto;
}

p {
  font-family: 'Courier New', Courier, monospace;
}

.btn {
  background-color: #092635;
}

.btn a {
  color: #9EC8B9;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 20px;
}

.container {
  padding: 10px 50px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  animation: movedown 1s linear forwards;
  opacity: 0;
  z-index: 2;
}

@keyframes movedown {
  0% {
    opacity: 1;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px); 
  }
}

.container:nth-child(1) {
  animation-delay: 0s;
}

.container:nth-child(2) {
  animation-delay: 1s;
}

.container:nth-child(3) {
  animation-delay: 2s;
}

.container:nth-child(4) {
  animation-delay: 3s;
}

.text-box {
  padding: 20px 30px;
  background: #092635;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.left-container {
  left: 0%;
}

.right-container {
  left: 50%;
}

.container img {
  position: absolute;
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  right: -20px;
  top: 32px;
  background-color: #fff;
}

.right-container img {
  left: -20px;
  right: auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 100%;
  background: #9EC8B9;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  animation: moveline 4s linear forwards;
}

@keyframes moveline {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

.left-container {
  left: 0;
  text-align: right;
  margin: 0;
}

.right-container {
  left: 50%;
  text-align: left;
  margin: 0;
}

.text-box {
  background-color: #002233;
  padding: 20px;
  position: relative;
  border-radius: 6px;
}

.left-container .text-box {
  margin-right: 30px;
}

.right-container .text-box {
  margin-left: 30px;
}

.container img {
  position: absolute;
  width: 40px;
  border-radius: 50%;
  top: 15px;
}

.left-container img {
  right: -20px;
}

.right-container img {
  left: -20px;
}

.left-container-arrow {
  position: absolute;
  top: 15px;
  right: -15px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #9EC8B9;
}

.right-container-arrow {
  position: absolute;
  top: 15px;
  left: -15px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid #9EC8B9;
}
</style>