<template>
  <nav>
    <routerLink :to="$store.state.rotaDinamica">Home</routerLink> |
    <routerLink to="/users/1">Users</routerLink>
  </nav>
  <router-view/>

  <span>Objeto de "state" - {{ this.$store.state.user.name }}</span>

</template>

<script>
export default{

  mounted(){
    document.title = "Aulas Vue.js 3"
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
</style>
