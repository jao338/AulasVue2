import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: "Ednaldo Pereira",
      email: "ednaldo.pereira@gmail.com",
      number: 40028922
    },

    products: [
      {
        id: 1,
        name: 'Peneira sem furos',
        price: 200
      },

      {
        id: 2,
        name: 'Bola quadrada',
        price: 20
      },

      {
        id: 3,
        name: 'Minoxidil',
        price: 90
      }
    ],
    
    rotaDinamica: {name: 'home'},

    cart: [],

    showButtonRemove: false,

  },

  getters: {
  },

  mutations: {
    storeUser(state, data){

      state.user = data;

    },

    addProduct(state, data){
      state.cart.push(data)
    },

    removeProduct(state, id){
      
      const index = state.cart.findIndex(item => item.id === id)

      index >= 0 ? state.cart.splice(index, 1) : ""

    },

  },

  actions: {
  },
  
  modules: {
  }
})
