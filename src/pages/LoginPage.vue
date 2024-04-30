<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const showing = () => {
    alert("Sesión iniciada");
    router.push('/')
}

/*const submitForm = () => {
  isLoading.value = true
  console.log(import.meta.env.VITE_API_URL+'/token/login');
  axios.post(
      import.meta.env.VITE_API_URL+'/token/login',
      {
        form_data: true,
        username: username.value,
        password: password.value
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        localStorage.setItem('token', JSON.stringify(response.data.access_token));
        window.dispatchEvent(new Event('tokenChanged'))
        getUserInfo();
        modalTitle.value = '¡Bienvenido!'
        modalContent.value = `En un momento serás redirigido a tu página de aulas.`
        showModal.value = true // Mostrar modal
        setTimeout(() => {
        router.push('/classrooms')
        },2500);
        isLoading.value = false // Terminó de cargar normalmente
    }).catch(() => {
    modalTitle.value = 'Credenciales incorrectas'
    modalContent.value = '¿Olvidaste tu contraseña? ¡Pues no hay problema! <br> ...Solo tienes que recordarla.'
    showModal.value = true // Mostrar modal
    isLoading.value = false // Terminó de cargar con error
})
}*/
</script>

<template>
    <main>
        <div class="login-container">
            <h2>Iniciar Sesión</h2>
            <form @submit.prevent="showing">
                <div class="form-group">
                    <label for="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form><br>
            <label>¿No tienes una cuenta?</label>
            <router-link to="/register">
                <button>Crear cuenta</button>
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
    height: 80vh;
    background-color: #fff;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: italic;
}

.login-container {
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