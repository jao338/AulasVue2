<template>

  <div id="products">

    <productComponent v-for="product in $store.state.products" :key="product.id" :product="product"/>

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