<template>
<div>
  <Header></Header>

    <div class="container align-items-center">
      <Login></Login>
      <!-- <Signin></Signin> -->
      <!-- <Home></Home> -->
    </div>

  <Footer></Footer>
</div>
</template>

<script>
/*
Este es mi contenedor en el se mostrará cada vista diferente.
Por ahora esta solo de prueba para las vistas de Login, Signin y Home. 
Login: para hacer el registro de un usuario
Signin: para autenticar al usuario. Falta crear una variable global para identificar al usuario en la vista del home.
Home: donde se guardan las tareas para cada usuario.
*/
import Header from './Header.vue';
import Footer from './Footer.vue';
import Login from './Login.vue';
import Home from './Home.vue';
import Signin from './Signin.vue';

export default {
  name: 'Container',
  components: {
    Header,
    Footer,
    Login,
    Home,
    Signin
  }
}
</script>