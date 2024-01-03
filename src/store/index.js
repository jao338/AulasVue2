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

  },

  getters: {

    total(state){

      return state.cart.reduce((total, item) => total += item.price, 0)

    }

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

    storeUser({commit}, data){

      return new Promise((resolve) => {
        setTimeout(() => {

          commit('storeUser', data);

          resolve();

        }, 3000)
      });
    }

  },
  
  modules: {
  }
})
