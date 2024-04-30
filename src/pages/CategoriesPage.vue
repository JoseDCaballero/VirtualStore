<template>
    <h1>Categorias</h1>
    <h2>A continuación se mostrarán las categorías de nuestros productos disponibles</h2>
    <div class="cate">
        <router-link to="/">
            <marquee scrollamount="25">Próximamente...</marquee>
        </router-link>
    </div>    
</template>

<style scoped>
    a {
        text-decoration: none;
        color: #000;
        font-size: 8vh;
    }
    .cate{
        background-color: #f1f1f1;
        height: 410px; 
    }
</style>