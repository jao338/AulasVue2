<template>  

<div id="app">

  <h1>Header</h1>

  <span>{{ name }}</span>

</div>
  
</template>

<script>
export default {

  data() {
    return {
      name: 'AAAAAAAAA',
    }
  },

  methods: {
    
  },

  watch: {

  },

  computed: {

  },

  // "this.$el" retorna o elemento raiz do componente, no caso a div de id "app"
  beforeUnmount() {
    console.log("beforeUnmount -", this.name, ", DOM -", this.$el)
  },

  unmounted(){
    console.log("unmounted -", this.name, ", DOM -", this.$el)
  }

}
</script>

<style>
  
</style>