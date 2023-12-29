<template>
  
  <div>

    <div class="mB-16">
      <span>Sem computed properties</span>
      <div>{{ user.firstName }} {{ user.lastName }}</div>
    </div>

    <div class="mB-16">
      <span>Com computed properties</span>
      <div>{{ fullName }}</div>
    </div>

    <div>
      <span>Listando itens de array e filtrando usando computed properties</span><br><br>
      
      <span>Todos</span>
      <div v-for="item in todos" :key="item.id">
        <input type="checkbox" v-model="item.completed"><span>{{ item.title }}</span>
      </div><br>

      <span>Incompletos</span>
      <div v-for="item in uncompletedTodos" :key="item.id">
        <div>
          <span>Título -{{ item.title }}</span> Status - <span>{{ item.completed }}</span>
        </div>
      </div><br>

      <span>Completos</span>
      <div v-for="item in completedTodos" :key="item.id">
        <div>
          <span>Título -{{ item.title }}</span> Status - <span>{{ item.completed }}</span>
        </div>
      </div><br>

    </div>

  </div>
  
</template>

<script>
export default {

  data() {
    return {
      user: {
        firstName: "João",
        lastName: "Henrique",
      },

      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
      
    }
  },

  computed: {
    fullName(){
      return `${this.user.firstName} ${this.user.lastName}`
    },

    uncompletedTodos() {
      return this.todos.filter(todo => !todo.completed)
    },

    completedTodos() {
      return this.todos.filter(todo => todo.completed)
    }
  }

}
</script>

<style>
  .mB-16{
    margin-bottom: 16px;
  }
</style>