<template>
    <main>
        <h1>No se encontró la página {{ $route.params.pathMatch }}</h1>
        <router-link to="/">
            <button>Regresar a inicio</button>
        </router-link>
    </main>
</template>

<style scoped>
button {
    padding: 2vh 2vh 2vh 2vh;
    border: 1px solid #000;
    background: rgba(0, 129, 207, 0.56);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.3px);
    -webkit-backdrop-filter: blur(9.3px);
}

button:hover {
    background-color: #0081CF;
    cursor: pointer;
}

main {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: italic;
}
</style>