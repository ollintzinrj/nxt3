<template>

  <div class="row pt-5">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">
          <p>Lista de Tareas</p>
        </div>

        <div class="card-body">
            
            <div class="form-group">
              <label class="form-label">Las tareas pasaran a concluidas después de 5 mínutos</label>
            </div>

            <div class="form-group form-floating">
              <input v-model="tarea.descripcion" type="text" id="floatingDescripcion" class="form-control" >
              <label for="floatingId">Descipción</label>
            </div>
            <div class="form-group form-floating">
              <input v-model="tarea.fecha" type="date" id="floatingFecha" class="form-control">
              <label for="floatingText">Fecha</label>
            </div>
            <!-- <div class="form-group form-floating">
              <input v-model="tarea.amanecer" type="text" id="floatingAmanecer" class="form-control">
              <label for="floatingUrl">Amanecer</label>
            </div>
            <div class="form-group form-floating">
              <input v-model="tarea.anochecer" type="text" id="floatingAnochecer" class="form-control">
              <label for="floatingLanguaje">Anochecer</label>
            </div> -->
            <button v-on:click="agregarTarea" class="btn btn-primary">Guardar</button>

        </div>
      </div>
    </div>

    <div class="col-md-7">
      <div class="table-responsive">
        <table class="table table-dark table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Descripción</th>
              <th scope="col">Fecha</th>
              <th scope="col">Amanecer</th>
              <th scope="col">Anochecer</th>
              <th scope="col">Estatus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i of tareas">
              <td>{{i.id}}</td>
              <td>{{i.descripcion}}</td>
              <td>{{i.fecha}}</td>
              <td>{{i.amanecer}}</td>
              <td>{{i.anochecer}}</td>
              <td>
                <!-- Agregar un v-if para poner el estatus en el check -->
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                  <input v-model="tarea.estatus" type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                  <label class="btn btn-outline-primary" for="btncheck1">Completado</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>
<script>
  export default{
    data ()
    {
      //modelado del item 
      return {
        tarea : {
          id_usuario: '',
          descripcion: '',
          fecha: '',
          estatus: '',
          amanecer: '',
          anochecer : '',
        },
        tareas : [],
      }
    },
    created(){
      //Este metodo se inicializa apenas se crea el template
      this.obtenerTareas();
    },
    methods: {
      obtenerTareas(){
        //Petición
        fetch('tareas/')
        //Respuesta
        .then(res => res.json())
        .then(data => {
          this.tareas = data;
        })
      },
      timeConverter(UNIX_timestamp){
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      },
      obtenerDatosExternos(){
        this.$http.get('https://api.openweathermap.org/data/2.5/onecall?lat=19.4978&lon=-99.1269&exclude=hourly,daily&appid=22f87316cb9406285e34b4022a965c9a')
        .then((res) => {
          this.tarea.amanecer = this.timeConverter(res.body.current.sunrise);
          this.tarea.anochecer = this.timeConverter(res.body.current.sunset);
        });
      },
      agregarTarea(){
        this.obtenerDatosExternos();
        
        console.log(this.tarea);
        let fechaUsuario = new Date(this.tarea.fecha).getTime() / 1000;
        this.tarea.fecha = this.timeConverter(fechaUsuario);
        //este campo deberá ser el id del usuario que esta logeado
        this.tarea.id_usuario = 1;
        //al agregar una tarea nueva siempre tendra estatus en cero
        this.tarea.estatus = 0;

        //Petición
        fetch('/tareas/add',{
          method : 'POST', 
          body : JSON.stringify(this.tarea),
          headers : {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
          }
        })
        //Respuesta
        .then(res => res.json())
        .then(res => console.log(res))
      },
      completarTareas(id){
        console.log("Completa: "+id);
        /*
        Esta función servirá para ser llamada en el método create() de la siguiente manera
        setTimeout(completarTareas, 300000);

        Además se debe hacer un ciclo para recorrer this.tareas pues solo se puede enviar de una en una.
        */
        //Petición
        fetch('/tareas/update/'+id, {
          method : 'PUT',
          body : JSON.stringify(this.tarea),
          headers : {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
          }
        })
        //Respuesta
        .then(res => res.json())
        .then(data => {
          this.obtenerItems();
        });
      }
    }//cierra methods
  }//cierra export
</script>