<template>
    <nav>
        <ul class="nav nav-pills" id="inava">
            <div>
                <img :src="logoUrl" alt="" class="gang"/>
            </div>
            <div class="nav-items">
                <li class="nav-item">
                    <a class="nav-link" href="/" id="gang"> Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about"> About </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/resumeView"> Resume </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/projectsView"> Projects </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contactView"> Contact </a>
                </li>
            </div>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            logoUrl: 'https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/images/1.%20Black_Elegant_Modern_Name_Initials_Monogram_Logo__2_-removebg-preview.png'
        }
    },
}
</script>
<style scoped>

#inava {
    display: flex;
    justify-content: space-between;
    border: 3px solid #9EC8B9;

}

.nav-items {
    display: flex;
    padding-right: 1.5cqi;
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
    
</style>

<!-- try changing the font of the logo on canva to...
 font-family: "Jacques Francois Shadow", serif;
  -->