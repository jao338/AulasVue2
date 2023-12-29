<template>
  
  <div>
    
    <div style="margin-bottom: 16px">
      <div>
        <span>Primeira forma de utilizar eventos: </span>
        <button v-on:click="onClick">Enviar</button>
      </div>

      <div>
        <span>Segunda forma de utilizar eventos: </span>
        <button @click="onClick">Enviar</button>
      </div>
      
    </div>

    <div class="box" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <span>Eventos de mouse</span>
    </div>

    <form action="https://google.com" @submit.prevent="onSubmit">
      <span>Enviando um formulário: </span>
      <button type="submit">Enviar</button>
    </form>

    <div>
      <label>Ao pressionar uma tecla: </label>
      <input type="text" @keypress="onKeyPress">
    </div>
    

  </div>
  
</template>

<script>
export default {

  data() {
    return {
      
    }
  },

  methods: {
    onClick() {
      console.log("click");
    },

    onMouseEnter() {
      console.log("Mouse entrou");
    },

    onMouseLeave() {
      console.log("Mouse saiu");
    },

    onsubmit(){
      console.log("Formulário enviado")
    },

    onKeyPress($event){
      console.log("A tecla ", $event.code, " foi pressionada")
    }
  }

}
</script>

<style>
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-bottom: 16px;
  }

  form{
    margin-bottom: 16px;
  }
</style>