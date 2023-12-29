<template>
  
  <div>
    
    <div>
      <span>Two-way databinding com input de texto</span><br><br>
      <label for="name">Nome: </label> <br>
      <input type="text" name="name" v-model="name">
      <p>{{ name }}</p>
    </div>

    <br>

    <div>
      <span>Two-way databinding com select</span><br><br>
      <select v-model="sports">
        <option value="">Escolha</option>
        <option value="Futebol">Futebol</option>
        <option value="Skate">Skate</option>
        <option value="Tenis">Tenis</option>
      </select>

      <p>{{ sports }}</p>
    </div>
  
    <br>

    <div>
      <span>Two-way databinding com input de radio</span><br><br>
      <label>Newsletter</label><br>
      <input type="radio" value="Sim" v-model="newsletter">Sim
      <input type="radio" value="Não" v-model="newsletter">Não
      <p>{{ newsletter }}</p>
    </div>

    <br>

    <div>
      <span>Two-way databinding com input de checkbox</span><br><br>
      <label>Contrato</label><br>
      <input type="checkbox" v-model="contract">Aceito os termos
      <p>{{ contract }}</p>
    </div>
  
    <br>

    <div>
      <span>Two-way databinding com mais de um input de checkbox</span><br><br>
      <label>Cores</label><br>
      <input type="checkbox" v-model="colors" value="Amarelo">Amarelo
      <input type="checkbox" v-model="colors" value="Azul">Azul
      <p>{{ colors }}</p>
    </div>

  </div>
  
</template>

<script>
export default {

  data() {
    return {
      name: "João Henrique",
      sports: '',
      newsletter: '',
      contract: false,
      colors: [],
    }
  }

}
</script>

<style>

</style>