<template>
  
<div>
  <baseAlertComponent :variant="variant">
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

    }
  },

  components: {
    baseAlertComponent
  },

  mounted() {
    document.title = "Aulas Vue.js 3"
  },

  
}
</script>

<style>

</style>
