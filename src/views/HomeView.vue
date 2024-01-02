<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <headerComponent>
      
      <template v-slot:title>
          {{ title }}
      </template>

      <template v-slot:description>
          {{ description }}
      </template>

    </headerComponent>

  </div>
</template>

<script>
// @ is an alias to /src
import headerComponent from '@/components/headerComponent.vue'

export default {
  name: 'HomeView',
  
  components: {
    headerComponent
  },

  data(){

    return {
      title: "Aulas Vue.js 3",
      description: "Introdução ao Vue Router"
    }

  }
}
</script>
