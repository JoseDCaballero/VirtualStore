<script setup>
// import { onMounted, onUnmounted, ref } from 'vue';

// const links = ref([
//   {path: '/', name: 'HomePage'},
//   {path: '/about', name: 'Acerca'},
//   {path: '/reception', name: 'Recepción'},
// ]);

// const isMobile = ref(window.innerWidth <= 768);

// const updateIsMobile = () => isMobile.value = window.innerWidth <= 768;

// onMounted(() => {
//   window.addEventListener('resize', updateIsMobile);
//   //window.addEventListener('tokenChanged', updateIsAuthenticated);
//   //updateIsAuthenticated()
// });

// onUnmounted(() => {
//   window.removeEventListener('resize', updateIsMobile);
//   //window.removeEventListener('tokenChanged', updateIsAuthenticated);
// });
</script>

<template>
    <div class="malo">            
        <nav>
            <router-link to="/">
                <div class="home">
                    <span><h1>Inicio</h1></span>
                </div>
            </router-link>    

            <router-link to="/about">                
                <div class="about">
                    <span><h1>Acerca</h1></span>
                </div>
            </router-link>                    

            <router-link to="/login">                
                <div class="recept">
                    <span><h1>Login</h1></span>
                </div>
            </router-link>
        </nav>
    </div>    
</template>

<style>
    nav {                
        width: 99.7%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #0081CF;        
        text-align: right;
        display: flex;
        align-items: right;
        justify-content: flex-end;
        border: 2px solid #000;
    }
    .home {
        background-color: rgb(206, 192, 0);
        padding: 1vh 2vh 1vh 2vh;
        color: #000;
        border-left: 2px solid #000;
        border-right: 2px solid #000;
    }
    .about {
        background-color: rgb(255, 255, 255);
        padding: 1vh 2vh 1vh 2vh;
        color: #000;
        border-right: 2px solid #000;
    }
    .recept {
        background-color: rgb(206, 192, 0);
        padding: 1vh 2vh 1vh 2vh;
        color: #000;        
    }
    .malo {
        height: 10vh;
    }
</style>