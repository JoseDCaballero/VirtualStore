<template>    
    <!--Tengo pensado agregar un v-if para la validacion por si está loggeado o no-->
    <h1>Bienvenido a la tienda virtual de <router-link to="/about"><a>Telas Emanuel</a></router-link></h1>

    <div id="verdadero">
        <router-link to="/categories"><h2>Inicie a comprar aquí</h2></router-link>
    </div>

    <div id="falso">
        <router-link to="/login"><h2>Para poder hacer compras debe iniciar sesión en su cuenta</h2></router-link>
    </div>

    <!--<div id="fondo">
        <img src="/src/images/logo.png">
    </div>-->
</template>

<style scoped>
    h1{
        font-size: 7vh;
    }
    a{
        color: #000;
    }
    img {
        width: 70%;
    }
</style>