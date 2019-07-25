import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  getters:{
    getList:function(state){
      return state.list;
    }
  },
  mutations: {
    getListFromBackEnd:function(state){
      this.$axios.get('/package-bookings').then(res => {   
        state.list = res.data;
    }).catch(error => {
        console.log('发生了错误   '+error);
    })
    }
  },
  actions: {
    
  }
})
