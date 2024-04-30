<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const showing = () => {
    let buena = document.getElementById('password');
    let mala = document.getElementById('confirm_password');
    if (buena.value !== mala.value) {
        alert("Las contraseñas no coinciden. Intente de nuevo");
    } else {
        alert("Cuenta creada con 'éxito'");
        router.push('/');
    }
}
</script>
<template>
    <main>
        <div class="signup-container">
            <h2>Crear cuenta</h2>
            <form @submit.prevent="showing">
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required>
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="confirm_password">Confirmar contraseña</label>
                    <input type="password" id="confirm_password" name="confirm_password" required>
                </div>
                <button type="submit">Crear cuenta</button>
            </form><br>
            <label>¿Ya tienes una cuenta?</label>
            <router-link to="/login">
                <button>Iniciar Sesión</button>
            </router-link>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 108.5vh;
    background-color: #fff;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: italic;
}

.signup-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 10px 10px 10px 10px rgba(1, 1, 1, 1);
    max-width: 400px;
    width: 100%;
}

h2 {
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: calc(100% - 20px);
    /* Restar el padding */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    /* Incluir el padding en el ancho total */
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #0081CF;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #01436b;
}
</style>