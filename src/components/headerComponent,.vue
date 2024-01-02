<template>  
<div>

  <label>Escreva um nome: </label><br><br>
  <input type="text" v-model="name"><br><br>
  <span>{{ name }}</span>

  <br><br><br>

  <label>Escreva o primeiro nome: </label><br><br>
  <input type="text" v-model="user.firstName"><br><br>
  <label>Escreva o último nome: </label><br><br>
  <input type="text" v-model="user.lastName"><br><br>
  <span>{{ user.firstName }} {{ user.lastName }}</span>

  <br><br><br>

  <div>Escolha um valor: </div><br>
  <select v-model="pageCount">

    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>

  </select><br><br>
  <span>{{ pageCount }}</span>

</div>
  
</template>

<script>
export default {

  data() {
    return {
      name: "",
      pageCount: 5,
      user: {
        firstName: "",
        lastName: ""
      }
    }
  },

  computed: {
  },  

  //  O objeto "watch" possui uma coletânea de itens, sendo que cada item é uma variável definida em "data()" e sempre com o mesmo nome. Toda vez que uma variável que está dentro de "watch" é alterada, uma rotina é correspondente é executada.

  //  Ao observar um objeto é necessário atribuir uma sintaxe diferente, ao invés ds declaração de método, é declarado um objeto contendo dois itens. Um deles é o "handler" que é onde fica a rotina de comandos e o outro é "deep: true", que significa que sempre que um item do objeto que está sendo observado se alterar, a rotina de comandos deve ser executada
  watch: {
    name(){
      this.saveUserName()
    },

    pageCount(){
      this.changePageCount()
    },

    user: {
      handler() {
        console.log("User alterado")
      },

      deep: true

    }
  },

  methods: {
    saveUserName(){
      console.log(this.name);
    },

    changePageCount(){
      console.log(this.pageCount);
    }
  }

}
</script>

<style>
  
</style>