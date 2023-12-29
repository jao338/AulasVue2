<template>
  
  <div>
    <headerComponent v-show="statusHeader"/>
    <button @click="showHeader">Mostrar/Ocultar</button>
  </div>

  <div v-if="accessLevel == 1">Admin</div>
  <div v-else-if="accessLevel == 2">Marketing</div>
  <div v-else>User</div>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>

import headerComponent from './components/headerComponent,.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    headerComponent
  },

  mounted() {
    document.title = 'Aulas Vue.js 3'
  },

  //  A função "data()" sempre retorna um objeto, sendo que cada item se torna um variável utilizável
  data(){
    return {
      statusHeader: true,
      accessLevel: 2,
    }
  },

  methods: {
    
    showHeader: function(){
      if(this.statusHeader == true){
        this.statusHeader = false
      }else{
        this.statusHeader = true
      }
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
