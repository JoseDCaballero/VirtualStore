<template>
    <!--Tengo pensado agregar un v-if para la validacion por si está loggeado o no-->
    <main>
        <h1>Bienvenido a la tienda virtual de <router-link to="/about"><a>Telas Emanuel</a></router-link></h1>

        <div id="verdadero">
            <router-link to="/categories">
                <h2>Inicie a comprar aquí</h2>
            </router-link>
        </div>
    </main>

    <!--<div id="falso">
        <router-link to="/login"><h2>Para poder hacer compras debe iniciar sesión en su cuenta</h2></router-link>
    </div>-->

    <!--<div id="fondo">
        <img src="/src/images/logo.png">
    </div>-->
</template>

<style scoped>
h1 {
    font-size: 7vh;
}

a {
    color: #000;
    text-decoration: none;
}

img {
    width: 70%;
}

main {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
}
</style>