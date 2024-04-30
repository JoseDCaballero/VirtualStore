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

function closeMenu() {
    document.getElementById("menu-toggle").checked = false;
}
</script>

<template>
    <div class="malo">
        <nav>
            <main>
                <input type="checkbox" id="menu-toggle">
                <label for="menu-toggle" class="hamburger-menu">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div id="menu" class="menu">
                        <label for="menu-toggle" class="close-button">&#10006;</label>
                        <div style="height: 50px;"></div>
                        <div style="background-color: #fff; border-top: 2px solid #000; height: 100vh;">
                            <router-link to="/" @click="closeMenu()">
                                <span>Inicio</span>
                            </router-link>
                            <router-link to="/about" @click="closeMenu()">
                                <span>Acerca</span>
                            </router-link>
                            <router-link to="/login" @click="closeMenu()">
                                <span>Login</span>
                            </router-link>
                        </div>
                    </div>
                </label>
            </main>
            <!--<router-link to="/">
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
            </router-link>-->
            <div id="fondo">
                <a href="https://www.facebook.com/profile.php?id=61558219467442" target="_blank">
                    <img src="/src/images/logo.png">
                </a>
            </div>
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
    /*padding: 4vh 5vh 5vh 5vh;*/
    height: 100px;
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
    height: 12vh;
}

#arribita {
    background-color: #0081CF;
    padding: 2vh 3vh 2vh 3vh;
}

main {
    margin: 0;
    padding: 0;
}

#menu-toggle,
#menu-toggle:checked {
    display: none;
}

.hamburger-menu {
    position: absolute;
    left: 10px;
    top: 25px;
    width: 40px;
    height: 30px;
    cursor: pointer;
}

.line {
    width: 100%;
    height: 8px;
    background-color: #000;
    border-radius: 20px;
    margin: 6px 0;
}

.menu {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0081CF;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 100vh;
    padding-top: 50px;
    /* Espacio para evitar que el menú tape el ícono */
    transition: transform 0.3s ease;
    transform: translateX(-100%);
    border-top: 2px solid #000;
    border-right: 2px solid #000;
}

#menu-toggle:checked+.hamburger-menu .menu {
    transform: translateX(0);
}

.menu a {
    display: block;
    color: #000;
    text-decoration: none;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
    font-size: 3vh;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
}

.menu a:hover {
    background-color: grey;
}

.close-button {
    position: absolute;
    top: 20px;
    left: 80px;
    cursor: pointer;
    font-size: 40px;
}

#fondo {
    padding-top: 2vh;
    padding-right: 2vh;
    height: 70px;
    width: 190px;
}

img {
    height: 100%;
    width: 100%;
}
</style>