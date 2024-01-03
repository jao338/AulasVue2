<template>

  <div id="products">

    <!-- Lista todos os produtos que estão no array "$store.state.products", passando para cada produto um objeto contendo suas informações -->
    <productComponent v-for="product in $store.state.products" :key="product.id" :product="product"/>

    <!-- Soma dos valores de cada item presente no array "$store.state.cart" -->
    <span>Valor total do carrinho - {{ $store.getters.total }} reais</span>

  </div>

</template>

<script>

import productComponent from "../Products/productComponent.vue";

export default {

  components: {
    productComponent,
  },

}
</script>

<style>
  #products{
    margin-top: 16px;
  }
</style>