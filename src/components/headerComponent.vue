<template>  

<div id="headerComponent">

  <!-- Um slot é um pedaço de um componente. Caso ele possua um atributo "name" ele poderá assim que utlizado no elemento pai possuir um conteúdo personalizado -->
  <h1 v-if="$slots.title">
    <slot name="title"/>
  </h1>

  <h1>
    <slot name="description"/>
  </h1>

  <slot/>

</div>
  
</template>

<script>
export default {

  mounted(){
    console.log(this.$slots)
  }

}
</script>

<style>
  
</style>