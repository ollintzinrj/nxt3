<template>

<div class="card col-9" style="margin: 20px;">
  <h5 class="card-header">Login</h5>
  <div class="card-body">
    <form class="row g-3">
      <div class="col-md-12">
        <label for="inputNombre" class="form-label">Nombre</label>
        <input v-model="usuario.nombre" type="text" class="form-control" id="inputNombre">
      </div>
      <div class="col-md-12">
        <label for="inputPassword" class="form-label">Password</label>
        <input v-model="usuario.contrasena" type="password" class="form-control" id="inputPassword">
      </div>

      <div class="col-12">
        <button type="button" v-on:click="obtenerUsuario()" class="btn btn-primary">Log in</button>
        <button type="button" class="btn btn-link">Sign in</button>
      </div>
    </form>
  </div>
</div>

</template>
<script>
  export default{
    name: 'Login',
    components: {
    },
    data ()
    {
      //modelado de tarea 
      return {
        usuario : {
          id: '',
          nombre: '',
          contrasena: ''
        },
        usuarios : [],
      }
    },
    methods: {
      obtenerUsuario(){
        //Petición
        if(this.usuario.nombre && this.usuario.contrasena)
        {
          fetch('/usuarios/get/'+this.usuario.nombre)
          //Respuesta
          .then(res => res.json())
          .then(data => {
            this.usuarios = data;
            if(this.usuario.contrasena === this.usuarios[0].contrasena)
              {
                this.$router.push('/signin');
              }
            else
              alert("El usuario o contraseña son incorrectos.");
          })
        }
        else
          alert("Ingresar datos de usuario.");
      },
    }//cierra methods
  }//cierra export
</script>