<template>
  <div>

    <button @click="login">Login</button>

    <h1>O objeto "$route"</h1>
    <!-- No objeto $route obtemos as informações sobre a rota atual -->
    <pre>
      {{ $route }}
    </pre>

    <h1>O objeto "$router"</h1>
    <!-- No objeto $router obtemos as funcionalidades do roteamento -->
    <pre>
      {{ $router }}
    </pre>

  </div>
</template>

<script>
export default {
  methods: {
    login(){

      //  O objeto $router retorna funcionalidades do roteamento. Neste caso, é feito um redirecionamento utilizando o método "push", que recebe como argumento um objeto contendo o nome da rota desejada
      this.$router.push({name: "home"})

    }
  }
}
</script>

<style>

  button{
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-bottom: 16px;
  }

</style>