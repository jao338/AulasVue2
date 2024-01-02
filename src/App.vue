<template>
  
<div>

  <headerComponent>

    <!-- Tudo que estiver dentro de um template com "v-slot:name_slot" será colocado dentro do slot correspondente no elemento filho -->
    <template v-slot:title>
      Title
    </template>

    <template v-slot:description>
      Description
    </template>

    content

  </headerComponent>

</div>

</template>

<script>

import headerComponent from './components/headerComponent,.vue'

export default {
  name: 'App',
  components: {
    headerComponent
  },

  mounted() {
    document.title = "Aulas Vue.js 3"
  }
}
</script>

<style>

</style>
