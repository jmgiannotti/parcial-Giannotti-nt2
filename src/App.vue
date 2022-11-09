<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Vue CLI</h1>
      <br>

      <Navegacion />
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Navegacion from './componentes/Navegacion.vue'

export default {
  name: 'App',
  components: {
    Navegacion
  }
}
</script>

<style>
  h1 {
    color: rgb(133, 49, 46);
  }
</style>
