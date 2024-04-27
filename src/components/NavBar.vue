<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const links = ref([
  {path: '/', name: 'HomePage'},
  {path: '/about', name: 'Acerca'},
  {path: '/reception', name: 'Recepción'},
]);

const isMobile = ref(window.innerWidth <= 768);

const updateIsMobile = () => isMobile.value = window.innerWidth <= 768;

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
  //window.addEventListener('tokenChanged', updateIsAuthenticated);
  //updateIsAuthenticated()
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
  //window.removeEventListener('tokenChanged', updateIsAuthenticated);
});
</script>

<template>
    <div class="malo">
        <nav>
            <router-link to="/">
                <div class="home">
                    <h1>Inicio</h1>
                </div>
            </router-link>    

            <router-link to="/about">                
                <div class="about">
                    <h1>Acerca</h1>
                </div>
            </router-link>                    

            <router-link to="/reception">                
                <div class="recept">
                    <h1>Recepción</h1>
                </div>
            </router-link>
        </nav>
    </div>    
</template>

<style>
    nav {                
        width: 99.3%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #0081CF;        
        text-align: right;
        display: flex;
        align-items: right;
        justify-content: flex-end;
        border: 5px solid #000;
    }
    .home {
        top: 90; 
        background-color: green;
        padding: 1vh 2vh 1vh 2vh;
        color: #000;
        border-left: 5px solid #000;
        border-right: 5px solid #000;
    }
    .about {
        background-color: white;
        padding: 1vh 2vh 1vh 2vh;
        color: #000;
        border-right: 5px solid #000;
    }
    .recept {
        background-color: red;
        padding: 1vh 2vh 1vh 2vh;
        color: #000;        
    }
    .malo {
        height: 10vh;
    }
</style>