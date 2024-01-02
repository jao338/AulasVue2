<template>

  <div :class="baseClass">

    <span>Valor padrão da prop "test" - {{ test }}</span><br><br>

    <slot/>

  </div>

</template>

<script>
export default {

    // Para adicionar um valor padrão é necessário utilizar um objeto contendo objetos, sendo que cada objeto representa uma prop diferente. Cada prop possui dois valores, o tipo do dado e o seu valor padrão. Também é possível criar uma prop como array, sendo que cada item do array será uma prop diferente
    props: {

        variant: {
            type: String,
            default: ''
        },

        test: {
            type: String,
            default: 'test'
        }

    },
    
    // Caso o valor de "this.variant" for igual a "alert-" concatenado com o valor da prop, o array recebe a classe, caso contarário não recebe nada
    computed: {
        baseClass(){
            return [
                
                'alert',
                this.variant ? `alert-${this.variant}` : ""
                
                ];
        }
    },

}
</script>

<style>

    .alert{
        text-align: center;
        width: 35%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 32px;
        padding: 8px;
        border-radius: 8px;
        color: gray;
        background-color: #ddd;
    }

    .alert-success{
        color: #fff;
        background-color: #42b983;
    }

    .alert-danger{
        color: #fff;
        background-color: red;
    }

</style>