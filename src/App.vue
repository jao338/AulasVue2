<template>
  <nav>
    <routerLink :to="$store.state.rotaDinamica">Home</routerLink> |
    <routerLink to="/users/1">Users</routerLink>
  </nav>
  <router-view/><br>

  <span>{{ $store.state.user.name }}</span><br>
  <span>{{ $store.state.user.email }}</span><br>
  <span>{{ $store.state.user.number }}</span><br><br>

  <button @click="updateUser">Atualizar</button>

</template>

<script>
export default{

  mounted(){
    document.title = "Aulas Vue.js 3"
  },

  methods: {
    updateUser(){

      const newUser = {
      name: "Manoel Gomes",
      email: "manoel1897@gmail.com",
      number: 40028922
    }

    this.$store.commit('storeUser', newUser)

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
  }
</style>
