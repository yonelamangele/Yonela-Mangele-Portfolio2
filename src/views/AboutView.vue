<template>
  <div class="about">
    <skills-comp>
      <template #skillsSlot>
        <section>
          <div id="sidebyside">
            <div class="para">
              <h1> About Me </h1>
              <p class="paragraph"> {{ aboutMe }} </p>
            </div>
            
            <div class="skills">  
              <h1 class="tech"> Technical Skills </h1>
              <p id="links">
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"/> </a> 
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/> </a> 
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/> </a> 
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap"/> </a> 
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs"/> </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"/> </a>
              </p>
            </div>
          </div>


          <div id="alone">
            <h1 class="soft"> Soft Skills </h1>
            <div class="skills-container">
              <div class="skill-card" v-for="skill in softSkills()" :key="skill.skillTitle">
                <div class="skill-content">
                  <h3> <b> <i> {{ skill.skillTitle }} </i> </b> </h3>
                  <img :src="skill.skillImage" alt="Skill Image" class="skill-img">
                </div>
              </div> 
            </div>
          </div>

        </section>
      </template>
    </skills-comp>
  </div>
</template>

<script>
import SkillsComp from '@/components/SkillsComp.vue';

export default {
  components: { 
    SkillsComp 
  },
  methods: {
    softSkills() {
            return this.$store.state.softSkills
        }
  },
  computed: {
    aboutMe() {
      return this.$store.state.aboutMe
    },
    getSoftSkills() {
            return this.$store.dispatch('getSoftSkills')
          }
        },
        mounted() {
          this.$store.dispatch('getAboutMe')
          this.getSoftSkills
  }
}
</script>

<style scoped>

.about {
  text-align: center;
  place-content: center;
  margin: 3.3em 0 3em;
}

section {
  /* margin-top: 30px; */
}

#sidebyside {
  display: flex;
  /* margin: 0 30px; */
}

#alone {
  margin-top: 8px;
}

.para {
  width: 50%;
}

.skills {
  width: 50%;
}

h1 {
  width: 45cqi;
  background-color: #092635;
  color: #9EC8B9;
  border-radius: 8px;
  margin: auto;
  box-shadow: 0 2px 9px #9EC8B9;
}

p {
  margin: 6cqi;
  color: #9EC8B9;
  font-size: 18px;
  font-family: 'Courier New', Courier, monospace;
}

#links a img {
  width: 8cqi;
}

#links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.skills-container {
  margin: 6cqi 2cqi 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  /* padding: 20px; */
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5C8374;
  color: #000000;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px #092635;
  width: 250px;
}

.skill-img {
  width: 40px;
  color: #9EC8B9;
}

a {
  padding: 5px;
  margin: 5px;
  background-color: #5C8374;
  box-shadow: 0 4px 6px #092635;
  border-radius: 8px
}

@media screen and (max-width: 1024px) {
  #sidebyside {
    flex-direction: column;
    place-items: center;
  }

  .para {
    width: 100%;
  }

  .skills {
    width: 100%;
  }

  #links {
    margin: 6cqi 16cqi;
  }
}

/* @media screen and (max-width: 768px) {
  #links {
    ma
  }
} */

@media screen and (max-width: 600px) {
  h1 {
    width: 300px !important;
    /* margin: 0 auto; */
    max-width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  .paragraph {
    font-size: small;
  }
}

@media screen and (max-width: 426px) {
  .skill-card {
    width: 200px;
  }  
}

@media only screen and (max-width: 320px) {
  #links {
    display: grid;
    grid-template-columns:  repeat(2, 1fr);
  }  
}

/* @media screen and (max-width: 768px) {  
  #links a {
    margin: 5px;
  }
  
  #links a img {
    width: 10cqi;
  }
} */
</style>















<!-- <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql"/> </a>  -->
<!-- <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/> </a>  -->

<!-- <div id="tools">
  <h3 id="h3tools"> Tools </h3>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"/> </a> 
</div> -->