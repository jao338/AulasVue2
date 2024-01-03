<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ title }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  
  components: {
  },

  data(){

    return {
      title: "Aulas Vue.js 3",
      description: "Introdução ao Vue Router"
    }

  }
}
</script>
