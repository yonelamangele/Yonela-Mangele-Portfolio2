<template>
  <div class="about">
    <skills-comp>
      <template #skillsSlot>
        <section>
          <div class="para">
            <h1> About Me </h1>
            <p> {{ aboutMe }}</p>
          </div>
          
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
  data() {
    return {
      // imgUrl1: '',
      // imgUrl2: '',
      // imgUrl3: '',
      // imgUrl4: ''
    }
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
  height: 100vh;
  text-align: center;
  justify-content: center;
  margin: 5em 0;
}


h1 {
  color: #9EC8B9
}

p {
  color: #9EC8B9;
  font-family: 'Courier New', Courier, monospace;
}

img {
  height: 100px;
  width: 100px;
}


section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skills-container {
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

@media only screen and (max-width: 500px) {
  /* section {
    margin-top: 30em;
  } */

}
</style>