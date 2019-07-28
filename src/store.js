import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

const state={
  list:[],
  visible:false,
  filterType:1
};

const getters={
  getVisible: state => {
    return state.visible;
  },
  getList: state => {
    return state.list;
  }
};

const mutations ={
  setVisible:(state,result) =>{
    state.visible = result;
  },
  setFilterType:(state,result) =>{
    console.log(result);
    state.filterType = result;
  },
  setList:(state, list) => {
    state.list = list;
  },
  addListItem:(state,item) => {
    state.list.push(item);
  }
}
const actions ={
  getListFromBackEnd:({commit},filter) =>{
    if(filter == null)
      filter = 1;
    console.log('filter为  ' +filter);
    commit('setFilterType',filter);
    axios.get('/package-bookings',{
      params:{
        filterType:filter
      }
    }).then(res => {   
      commit('setList',res.data);
    }).catch(error => {
        console.log('请求后台数据失败，请联系xxx'+error);
    });
  },
  addPackageEnwrap:({commit}, enwrap) =>{
    console.log('????');
    console.log(enwrap);
    axios.post('/package-bookings',enwrap)
    .then(res => {   
      commit('addListItem',res.data);
    }).catch(error => {
        console.log('请求后台数据失败，请联系xxx'+error);
    });
  },
  updatePackageEnwrapStatus:({commit},enwrap) => {
    enwrap.orderStatus = 3;
    axios.put('/package-bookings',enwrap)
    .then(res => {   
      commit('setList',res.data);
    }).catch(error => {
        console.log('请求后台数据失败，请联系xxx'+error);
    });

  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
