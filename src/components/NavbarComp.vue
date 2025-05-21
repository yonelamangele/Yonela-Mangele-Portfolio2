<template>
    <nav id="nav1">
        <ul class="nav nav-pills" id="navbar">
            <div>
                <img :src="logoUrl" alt="logo" class="gang"/>
            </div>
            
            <!-- Desktop Menu -->
            <div class="nav-items">
                <li class="nav-item" @click="closeMenu"><a class="nav-link" href="/" id="gang"> Home </a></li>
                <li class="nav-item" @click="closeMenu"><a class="nav-link" href="/about"> About </a></li>
                <li class="nav-item" @click="closeMenu"><a class="nav-link" href="/resumeView"> Resume </a></li>
                <li class="nav-item" @click="closeMenu"><a class="nav-link" href="/projectsView"> Projects </a></li>
                <li class="nav-item" @click="closeMenu"><a class="nav-link" href="/contactView"> Contact </a></li>
            </div>
            
            <!-- Menu Toggle Icons -->
            <span class="material-symbols-outlined" @click="toggleMenu" id="menuIcon" v-if="!isMenuOpen"> menu </span>
            <span class="material-symbols-outlined" @click="closeMenu" id="closingIcon" v-else> close </span>
        </ul>
    </nav>

    <!-- Mobile Dropdown Nav -->
    <nav id="nav2" v-show="isMenuOpen">
        <ul id="navbar2">
            <div class="nav-items2">
                <li class="nav-item" @click="closeMenu"> <a class="nav-link" href="/" id="gang"> Home </a> </li>
                <li class="nav-item" @click="closeMenu"> <a class="nav-link" href="/about"> About </a> </li>
                <li class="nav-item" @click="closeMenu"> <a class="nav-link" href="/resumeView"> Resume </a> </li>
                <li class="nav-item" @click="closeMenu"> <a class="nav-link" href="/projectsView"> Projects </a> </li>
                <li class="nav-item" @click="closeMenu"> <a class="nav-link" href="/contactView"> Contact </a> </li>
            </div>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            logoUrl: 'https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/images/1.%20Black_Elegant_Modern_Name_Initials_Monogram_Logo__2_-removebg-preview.png',
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    }
}
</script>
<style scoped>

#navbar {
    display: flex;
    justify-content: space-between;
    border: 3px solid #9EC8B9;
}

.nav-items {
    display: flex;
    padding-right: 1.5cqi;
    flex-direction: row;
}

.nav-items2 { 
    display: none;
    width: 100%;
}

#navbar2 {
    list-style: none;
    place-items: center;
    padding-left: 0;
}


.nav-items2 li {
    width: 100%;
    border: 1px solid #9EC8B9;
    text-align: center;
}

.nav-items.open {
    display: flex;
    flex-direction: column;
}


.gang {
    height: 10cqi;
    min-height: 5em;
}

li {
    place-content: center;
}

a {
  font-size: 2cqi;  
  color: #9EC8B9;
}

a:hover {
    color: grey;
}

span {
    color: #9EC8B9;
    place-content: center;
    margin-right: 8px;
    display: none;
}

span.material-symbols-outlined {
  color: #9EC8B9;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 1rem;
  display: none
}

.gang {
    animation: zoom-in-out 4s infinite
}

@keyframes zoom-in-out {
    0% {
        transform: scale(1);
    }
    
    50% {
        transform: scale(1.5);
    }
    
    100% {
        transform: scale(1);
    }
}

@media screen and (max-width: 396px) {
    .nav-items {
        display: none;
    }

    span.material-symbols-outlined {
        display: block;
    }
      
    #nav2 {
        display: block;
    }

    .nav-items2 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav-item a {
        font-size: 1.2rem;
        padding: 0.5rem;
    }
}

</style>

<!-- try changing the font of the logo on canva to...
 font-family: "Jacques Francois Shadow", serif;
  -->