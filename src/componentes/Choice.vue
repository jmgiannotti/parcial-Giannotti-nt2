<template>

  <section class="src-componentes-choice">
    <h1>Multiple Choice</h1>
        
          <table class="table ">
          <tr v-for="(respuesta,index) in respuestas" :key="index">
              
               <td>{{ respuesta.pregunta}}</td>
               <td>{{ respuesta.respuestas}}</td>
          </tr>
 
        </table>
    

  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [{pregunta: 1, respuestas: "a, b"}, {pregunta: 2, respuestas: "c"}, {pregunta: 3, respuestas: "b, e"}]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
table{
  background-color: antiquewhite;

}

</style>
