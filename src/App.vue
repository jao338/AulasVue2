<template>
  
  <div>
    <h1>Informações do usuário</h1><br>

    <span>{{ $store.state.user.name }}</span><br>
    <span>{{ $store.state.user.email }}</span><br>
    <span>{{ $store.state.user.number }}</span><br>

    <button @click="updateUser">Atualizar perfil</button>

    <productsComponent/>

  </div>

</template>

<script>

import productsComponent from "./components/Products/productsComponent.vue";

export default{

  mounted(){
    document.title = "Aulas Vue.js 3"
  },

  components: {
    productsComponent,
  },

  methods: {
    updateUser(){

      const newUser = {
      name: "Manoel Gomes",
      email: "manoel1897@gmail.com",
      number: 40028922
    }

    // this.$store.commit('storeUser', newUser)

    this.$store.dispatch('storeUser', newUser).then(() => {
      console.log("Terminou com sucesso")
    })

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button{
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 32px;
    margin-right: 8px;
  }
</style>
