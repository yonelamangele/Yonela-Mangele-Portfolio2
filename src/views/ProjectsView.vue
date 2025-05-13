<template>
    <div class="projects">
        <project-comp>
            <!-- <template #projectSlot> -->
                <h1> My Projects </h1>
                <section>
                    <div class="projects1" v-for="project in projects()" :key="project">
                        <div class="row row-cols-1 row-cols-md-2 g-4 card-proj" id="space">
                            <div class="col">
                                <div class="card">
                                    <img :src="project.image" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <div class="try">
                                            <h2 class="card-title"> {{ project.name }} </h2>
                                            <p class="card-text"> {{ project.description }} </p>
                                            <button>
                                                <a :href="project.github" target="_blank"> Github </a>
                                            </button>
                                            <button>
                                                <a :href="project.live" target="_blank"> Visit </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <!-- </template> -->
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
  height: 200vh;
  text-align: center;
  justify-content: center;
  margin: 5em 0 15em;
  color: #9EC8B9;
}

.card {
    background-color: #092635;
    color: #9EC8B9;
    width: 350px;
    height: 630px;
    border-radius: 20px;
}

p {
    font-family: 'Courier New', Courier, monospace;
}

.col {
    width: 350.66px;
    height: 300px
}

.card-img-top {
    width: 350px;
    height: 250px;
    border: solid 5px #9EC8B9;
}

.card-body {
    place-content: center;
}

.try {
    padding: 20px;
    border: solid 5px #9EC8B9;
}

button {
    background-color: #9EC8B9;
    border-radius: 8px;
    margin: 10px;
}

button:hover {
    background-color: #092635;
}

a {
    text-decoration: none;
    color: #092635;
}

a:hover {
    color: #9EC8B9;
}

section  {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;
    margin-top: -170px;
    height: 100em;
}
</style>