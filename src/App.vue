<template>
  
<div>
  <baseCardComponent/>
  <div class="baseCardComponent">Teste</div>
</div>

</template>

<script>

import baseCardComponent from './components/baseCardComponent.vue'

export default {
  name: 'App',
  components: {
    baseCardComponent
  },

  mounted() {
    document.title = "Aulas Vue.js 3"
  }
}
</script>

<style>

</style>
