<template>
  <a-table 
    :columns="columns"
    :pagination="pagination"
    :loading="loading"
    :dataSource="data"
    :rowKey="record => record.orderId"
  >
    <template >
      
    </template>
  </a-table>
</template>
<script>
const columns = [{
  title: '运单号',
  dataIndex: 'orderId',
}, {
  title: '收件人',
  dataIndex: 'recipientsName',
}, {
  title: '电话',
  dataIndex: 'telPhone',
},{
  title: '状态',
  dataIndex: 'orderStatus',
},{
  title: '预约时间',
  dataIndex: 'appointmentTime',
},{
  title: '按钮的地方',
  dataIndex: '',
}
];

import { mapGetters } from 'vuex'
export default {
  
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    }
  },
  methods: {
  },
  mounted:function(){
    this.$store.dispatch('getListFromBackEnd');
  },
    computed:{
    ...mapGetters([
      'getList'
    ]),
    
    /*getFilterType:function(){
      return this.$store.state.filterType;
    }*/
  },
  watch:{
    getList: function(){
      console.log('监听事件执行');
      this.data = this.$store.state.list;
    }
  },
}
</script>
