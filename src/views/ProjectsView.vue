<template>
    <div class="projects">
        <project-comp>
                <div id="myprojects">
                    <h1> My Projects </h1>
                </div> 
                <section>
                    <div class="projects1" v-for="project in projects()" :key="project.name">
                        <div class="project-card">
                            <figure>
                                <img :src="project.image" alt="" /> 
                                <figcaption>
                                    <h2 class="title"> <b> {{ project.name }} </b> </h2>
                                    <p class="description"> {{ project.description }} </p>
                                    <p>  {{ project.technologies }} </p>
                        
                                    <!-- Buttons appear on hover -->
                                    <div class="project-links">
                                        <a :href="project.github" target="_blank" class="btn"> GitHub </a>
                                        <a :href="project.live" target="_blank" class="btn"> Live Demo </a>
                                    </div>       
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
        </project-comp>
    </div>
</template>

<script>
import ProjectComp from '../components/ProjectComp.vue'
export default {
    components: {
        ProjectComp
    },
    methods: {
        projects() {
            return this.$store.state.projects
        }
    },
    computed: {
        getProjects() {
            return this.$store.dispatch('getProjects')
        }
    },
    mounted() {
        this.getProjects
    }
}
</script>

<style scoped>

.projects {
    text-align: center;
    margin: 4em 0 2em;
}

#myprojects {
    background-color: #9EC8B9;
    color: #092635;
    border-radius: 8px;
    margin: auto;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.project-card {
  background-color: #092635;
  border: 2px solid #9ec8b9;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  text-align: center;
  color: #9ec8b9;
  position: relative;
}

.project-card:hover {
  transform: scale(1.05);
}

.single_item {
    width: 10cqi;
}

figure {
  margin: 0;
  padding: 1rem;
}

figure img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #9ec8b9;
}

figcaption {
  padding: 1rem;
}

.title {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.description {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', Courier, monospace;
}

.project-links {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.project-card:hover .project-links {
  opacity: 1;
}

.btn {
  display: inline-block;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  background-color: transparent;
  color: #9ec8b9;
  border: 1px solid #9ec8b9;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.btn:hover {
  background-color: #9ec8b9;
  color: #092635;
}

@media screen and (min-width: 1440px) {
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }    
}

/* @media screen and (max-width: 420px) {

} */
</style>