<template>
  
  <headerComponent/>

</template>

<script>

import headerComponent from './components/headerComponent,.vue'

export default {
  name: 'App',
  components: {
    headerComponent
  },

  mounted() {
    document.title = 'Aulas Vue.js 3'
  },

  //  A função "data()" sempre retorna um objeto, sendo que cada item se torna um variável utilizável
  data(){
    return {
      
    }
  },

  methods: {
    
    

  }
}
</script>

<style>

</style>
