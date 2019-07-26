<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="4" @click="changeFilterType(0)">未取件</a-menu-item>
        <a-menu-item key="1" @click="changeFilterType(1)">ALL</a-menu-item>
        <a-menu-item key="2" @click="changeFilterType(2)">已预约</a-menu-item>
        <a-menu-item key="3" @click="changeFilterType(3)">已取件</a-menu-item>       
        <a-menu-item key="5"  @click="showModal">+添加</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <package-enwrap-table></package-enwrap-table>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
    
    <show-modal></show-modal>
  </a-layout>
</template>

<script>
import PackageEnwrapTable from './packageEnwrapTable'
import showModal from './showModal'

export default {
    name:'home',
    components:{
      PackageEnwrapTable,
      showModal
    },
    methods:{
      showModal() {
        //this.visible = true
        this.$store.commit('setVisible',true);
        this.$store.dispatch('getListFromBackEnd');
        console.log('click');
      },
      changeFilterType(key){
        this.$store.commit('setFilterType',key);
      }
    }
}
</script>



<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>