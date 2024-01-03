<template>

  <div id="product">
    {{ product.name }} - {{ product.price }} reais<br>
    
    <button @click="addProduct">Adicionar</button>
    <button @click="removeProduct"  v-if="showRemove">Remover</button>
    
  </div>

</template>

<script>
export default {

  props: {
    product: Object
  },

  data() {
    return {
      showRemove: false,
    }
  },

  methods: {
    addProduct(){
      this.$store.commit('addProduct', this.product)

      this.showRemove = !this.showRemove;
    },

    removeProduct(){
      this.$store.commit('removeProduct', this.product.id)

      this.showRemove = !this.showRemove;
    },

  }

}
</script>

<style>
  #product{
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    background-color: bisque;
    padding: 4px;
    margin-bottom: 8px;
  }
</style>