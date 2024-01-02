<template>
  
<div id="app">
  <headerComponent v-if="showHeader"/>

  <br>
  <button @click="showHeader = !showHeader">Ativar/Desativar header</button>

</div>

</template>

<script>

import headerComponent from './components/headerComponent,.vue'

export default {
  name: 'App',
  components: {
    headerComponent
  },

  data(){
    return {
      name: 'AAAAAAAAA',
      showHeader: true,
    }
  },

  // "this.$el" retorna o elemento raiz do componente, no caso a div de id "app"
  //  Executado antes de atualizar o componente
  beforeUpdate(){
    console.log("beforeUpdate -", this.name, ", DOM -", this.$el)
  },

  //  Executado após atualizar o componente
  updated(){
    console.log("updated -", this.name, ", DOM -", this.$el)
  },

  //  Executado antes de criar o componente
  beforeCreate(){
    console.log("beforeCreate -", this.name, ", DOM -", this.$el)
  },

  //  Executado após criar o componente
  created(){
    console.log("created -", this.name, ", DOM -", this.$el)
  },

  //  Executado antes de montar o componente
  beforeMount(){
    console.log("beforeMount -", this.name, ", DOM -", this.$el)
  },

  //  Executado após montar o componente
  mounted() {
    console.log("mounted -", this.name, ", DOM -", this.$el)
    document.title = 'Aulas Vue.js 3'
  },

}
</script>

<style>

</style>
