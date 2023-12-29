<template>
  
  <div v-for="(item, index) in todos" :key="item.id">

    <h1 :class="{ 'title': classVar }">Title</h1>

    <p :class="pClass">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum, dicta illo officia eaque aperiam autem perspiciatis porro dignissimos impedit optio! Debitis vero distinctio id voluptatibus sit doloribus, pariatur sed?</p>

    <p style="color: green">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et adipisci sit dignissimos beatae earum possimus, ut minus perspiciatis id.</p>

    <p>Index - {{ index }}</p>
    <p>Título - {{ item.title }}</p>
    <img v-if="item.imgSrc" :src="item.imgSrc">
  </div>
  
</template>

<script>
export default {

  data() {
    return {

      classVar: true,

      pClass: { 'title': true },

      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "imgSrc": "https://pbs.twimg.com/profile_images/1561105702541824000/lwOHrYLO_400x400.jpg",
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "imgSrc": "https://pbs.twimg.com/profile_images/1561105702541824000/lwOHrYLO_400x400.jpg",
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
      ],

    }
  }

}
</script>

<style>
    header{
        color: green;
    }

  .title{
    font-size: 24px;
    color: blue;
  }

</style>