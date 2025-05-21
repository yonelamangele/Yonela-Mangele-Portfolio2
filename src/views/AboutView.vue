<template>
  <div class="about">
    <skills-comp>
      <template #skillsSlot>
        <section>
          <div class="para">
            <h1> About Me </h1>
            <p> {{ aboutMe }} </p>
          </div>

          <div class="skills">  
            <h1 class="tech"> Technical Skills </h1>
            <div id="middle">
              <div id="frontend">
                <h3 id="h3front"> Front-End </h3>
                <p id="links">
                  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"/> </a> 
                  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/> </a> 
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/> </a> 
                  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap"/> </a> 
                  <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs"/> </a>
                  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"/> </a>
                  <!-- <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql"/> </a>  -->
                  <!-- <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/> </a>  -->
                </p>
              </div>
              <!-- <div id="tools">
                <h3 id="h3tools"> Tools </h3>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"/> </a> 
              </div> -->
            </div>
          </div>
          
          <h1 class="soft"> Soft Skills </h1>
          <div class="skills-container">
            <div class="skill-card" v-for="skill in softSkills()" :key="skill.skillTitle">
              <div class="skill-content">
                <h3> <b> <i> {{ skill.skillTitle }} </i> </b> </h3>
                <img :src="skill.skillImage" alt="Skill Image" class="skill-img">
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
  /* height: 200vh; */
  text-align: center;
  justify-content: center;
  place-content: center;
  margin: 4em 0 3em;
}

h1 {
  color: #092635;
  background-color: #9EC8B9;
  border-radius: 8px;
  margin: auto;
}

p {
  margin: 60px;
  color: #9EC8B9;
  font-family: 'Courier New', Courier, monospace;
}

#links a img {
  width: 6cqi;
}

#links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skills-container {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9EC8B9;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px #092635;
  width: 250px;
}

.skills {
  margin: 30px;
}

.skill-img {
  width: 40px;
}

a {
  padding: 15px;
  margin: 5px;
  background-color: #9EC8B9;
  border-radius: 8px
}

h1 {
  width: 45cqi;
}

#middle {
  /* justify-items: center; */
  /* place-items: center; */
}

#frontend {
  display: flex;
  place-items: center;
}

#tools {
  display: flex;
  place-items: center;
}

#h3tools {
  padding-right: 40px;
}

#h3front {
  color: #9EC8B9;
  padding-left: 40px;
}

@media only screen and (max-width: 320px) {
  #links {
    display: grid;
    grid-template-columns:  repeat(2, 1fr);
  }  
}

@media screen and (max-width: 768px) {
  #h3front {
    display: none;
  }

  #links a {
    margin: 5px;
  }
  #links a img {
    width: 10cqi;
  }
}
</style>