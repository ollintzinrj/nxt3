<template>

<div class="card col-9" style="margin: 20px;">
  <h5 class="card-header">Signin</h5>
  <div class="card-body">
    <form class="row g-3">
      <div class="col-md-12">
        <label for="inputNombre" class="form-label">Nombre</label>
        <input type="text" v-model="usuario.nombre" class="form-control" id="inputNombre">
      </div>
      <div class="col-md-12">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" v-model="usuario.contrasena" class="form-control" id="inputPassword">
      </div>

      <div class="col-12">
        <button type="button" v-on:click="agregarUsuario()" class="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
</div>

</template>
<script>
  export default{
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
    created(){
      //Este metodo se inicializa apenas se crea el template
    },
    methods: {
      agregarUsuario(){
        console.log(this.usuario);
        //Petición
        fetch('/usuarios/add',{
          method : 'POST', 
          body : JSON.stringify(this.usuario),
          headers : {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
          }
        })
        //Respuesta
        .then(res => res.json())
        .then(res => console.log(res))
      }
    }//cierra methods
  }//cierra export
</script>