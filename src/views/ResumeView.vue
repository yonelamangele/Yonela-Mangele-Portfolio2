<template>
  <div class="resume">
    <resume-comp>
      <div id="education">
        <h1> My Education </h1>
      </div>
      
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
          <small> {{ item.year }} </small>
          <p>{{ item.description }}</p>
          <span :class="index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'"></span>
        </div>
      </div>
    </div>

    <div id="car">
      <div id="achievements">
        <h1> My Achievements </h1>
      </div>
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/AWS/1.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/2.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/3.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/4.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/5.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/6.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/7.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/8.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/9.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/10.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/11.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/12.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/13.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/14.png" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="@/AWS/15.png" class="d-block w-100">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- <button class="alone"> View CV </button> -->
    
    <div class="btn">
      <a href="https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/cv/My%20CV.pdf" target="_blank" id="btn"> View CV </a>
    </div>
  </resume-comp>
  <NavbarComp/>
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';

export default {
  component: NavbarComp,
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
  margin: 3.3em 0 4em;
  color: #9EC8B9;
}

h1 {
  width: 50cqi;
  box-shadow: 0 4px 6px #092635;
  margin: auto;
  background-color: #092635;
  border-radius: 8px;
  color: #9EC8B9;
  box-shadow: 0 2px 9px #9EC8B9;
}

.btn {
  margin-top: 3cqi;
  padding: 0;
}

p {
  font-family: 'Courier New', Courier, monospace;
}

#btn {
  display: inline-block;
  /* margin: 0.3rem; */
  padding: 0.4rem 0.8rem;
  background-color: #092635;
  color: #9ec8b9;
  border: 1px solid #9ec8b9;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s;
}

#btn:hover {
  background-color: #9ec8b9;
  color: #092635;
  border: 1px solid #092635;
}

h3 {
  font-weight: 900;
}


.timeline {
  position: relative;
  max-width: 1200px;
  margin: 6cqi auto;
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
  padding: 20px 40px;
  background-color: #5C8374;
  color: #000000;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  box-shadow: 0 5px 7px #092635
}

small {
  font-weight: 600
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
  /* background-color: #002233; */
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
  border-left: 15px solid #5C8374;
}

.right-container-arrow {
  position: absolute;
  top: 15px;
  left: -15px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid #5C8374;
}

#car {
  place-items: center;
  margin-bottom: 6cqi;
}

#carouselExampleRide {
  width: 270px !important;
  margin-top: 6cqi;
  box-shadow: 0 5px 7px #092635;
  border-radius: 7px;
}

.carousel-item img {
  border-radius: 7px;
}

.carousel-control-prev-icon {
  background-image: none;
  background-color: #092635;   /* Change to whatever color you want */
  mask-image: url("data:image/svg+xml,<svg fill='white' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M11.354 1.646a.5.5 0 0 0-.708 0L4.793 7.5l5.853 5.854a.5.5 0 0 0 .708-.708L6.207 7.5l5.147-5.146a.5.5 0 0 0 0-.708z'/></svg>");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 100%;
  width: 2rem;
  height: 2rem;
}

.carousel-control-next-icon {
  background-image: none;
  background-color: #092635; /* Or any color you want */
  mask-image: url("data:image/svg+xml,<svg fill='white' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M4.646 1.646a.5.5 0 0 1 .708 0L11.207 7.5l-5.853 5.854a.5.5 0 0 1-.708-.708L9.793 7.5 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 100%;
  width: 2rem;
  height: 2rem;
}

@media screen and (max-width: 675px) {
  .timeline {
    margin: 6cqi auto;
  }

  .timeline::after {
    left: 60px
  }

  .container {
    width: 100%;
    padding-left: 100px;
    padding-right: 25px;
  }

  .text-box {
    font-size: 13px;
  }

  .text-box small {
    margin-bottom: 10px;
  }

  .right-container {
    left: 0;
  }

  .left-container img, .right-container img {
    left: 20px;
  }

  .left-container-arrow, .right-container-arrow {
    border-right: 15px solid #9EC8B9;
    border-left: 0;
    left: -15px
  }

  .left-container .text-box {
    margin-right: 0;
    margin-left: 30px;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    width: 300px;
  }
}

@media screen and (max-width: 370px) {
  .container .text-box h3 {
    font-size: large;
    font-weight: 800
  }
}

@media screen and (max-width: 340px) {
  .container .text-box h3 {
    font-size: medium;
    font-weight: 800
  }

  small {
    font-size: smaller;
  }
}
</style>