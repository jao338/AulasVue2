<template>
  
<div id="teste">
  <button v-if="!showAlert" @click="openAlert">Abrir novamente</button>

  <baseAlertComponent :variant="variant" @close="onClose" v-if="showAlert">
    {{ text }}
  </baseAlertComponent>
</div>

</template>

<script>

import baseAlertComponent from './components/baseAlertComponent.vue'

export default {
  name: 'App',

  data(){
    return {

      variant: "success",
      text: "Seu formulário foi enviado com sucesso",
      showAlert: true

    }
  },

  components: {
    baseAlertComponent
  },

  mounted() {
    document.title = "Aulas Vue.js 3"
  },

  methods: {
    onClose(){
      this.showAlert = !this.showAlert
    },

    openAlert(){
      this.showAlert = !this.showAlert
    }
  }

  
}
</script>

<style>

</style>
