<template>

  <section class="src-componentes-formulario">
    <div class="jumbotron">
      <h2>Registro de gastos</h2>
      <hr>
      <hr>
      <br>
      
      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
        
          <label for="nombre">Nombre</label>
          <input 
            id="nombre"
            class="form-control"
            type="text" 
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre"
            autocomplete="off"
            no-espacios
          />
          <!-- cartel de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>

            <div slot="minlength" class="alert alert-danger mt-1">Este campo debe poseer al menos {{nombreMinLength}} caracteres.</div>

            <div slot="maxlength" class="alert alert-danger mt-1"> Este campo no puede poseer mas de {{nombreMaxLength}} caracteres.</div>
            
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no admite espacios intermedios.
            </div>
          </field-messages>
        </validate>
        <br>
        <!-- ------------------------------------------------------- -->
        <!-- Campo descripcion -->
        <validate tag="div">
          <label for="descripcion">Descripcion</label>
          <input 
            id="descripcion"
            class="form-control"
            type="text" 
            v-model.trim="formData.descripcion" 
            required 
            name="descripcion"
            autocomplete="off"
            
          />
          <!-- cartel de validación -->
          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>
        <br>
    
        <!-- ------------------------------------------------------- -->
        <!-- Campo importe -->
        <validate tag="div">
          <label for="importe">Importe</label>
          <input 
            id="importe"
            class="form-control"
            type="number" 
            v-model.number="formData.importe" 
            required 
            name="importe"
            autocomplete="off"
          />
          <!-- cartel de validación -->
          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>
        <br>
      

        <!-- ------------------------------------------------------- -->
        <!-- Botón de envío -->
        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>
      </vue-form>
      </div>
      <hr>    
    
    <div class="jumbotron">
      <label for="presupuesto"><h3>Ingrese su presupuesto</h3></label>
      <br>
      <input type="number" class="mt-3" v-model.number="presupuesto" name="presupuesto" id="presupesto" :style="presupuesto < importeTotal() ? { 'color': 'red'} : ''"> 

      <h2 style="mt-3">Detalle de Gastos</h2>
      <br>
      <br>
      <br>
      <div v-if="personas.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Importe</th>
            <th>Fecha</th>
            
          </tr>
          <tr v-for="(persona,index) in personas" :key="index">
            
            <td>{{ persona.nombre }}</td>
            
            <td>{{ persona.descripcion }}</td>

           
            
            <td>{{ persona.fecha }}</td>
          </tr>
          <tr>
            <td><b>GASTO TOTAL:</b></td>
            <td :style="{color: analizarGastos(importeTotal()).color}">{{importeTotal()}}</td>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay gastos ingresados</h3>
    </div>

  </section>



</template>

<script>

  
  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        personas: [],
        formState : {},
        formData: this.getInitialData(),
        presupuesto: null,
        nombreMinLength: 3,
        nombreMaxLength: 15
        

      }
    },
    methods: {
      getInitialData() {
        return {
          nombre: "",
          descripcion: "",
          importe: null
          
        }
      },
     enviar() {

        let persona = {...this.formData}

        persona.fecha = new Date().toLocaleString()
        this.personas.push(persona)
        this.formData = this.getInitialData()

        this.formstate._reset()
      },

      analizarGastos(gasto) {
        let color = ''
        if (gasto < 1000) {
          color = "green"
        }
        else if (gasto >= 1000 && gasto <= 5000) {
          color = "magenta"
        }
        else{
          color = 'orange'
        }
        return {
          color
        }
      },
      importeTotal(){
        let gasto = 0
        this.personas.forEach(persona => {
          gasto += parseInt(persona.importe)
        });
       return gasto
      }


    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  table{
    color: white;

  }
  .jumbotron {
    background-color: rgb(194, 90, 58);
    color: rgb(255, 255, 255);
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
