<template>
  <a-table 
    :columns="columns"
    :pagination="pagination"
    :loading="loading"
    :dataSource="data"
    :rowKey="record => record.orderId"
  >
    <a-button slot="operation" slot-scope="text,record"  v-if="record.orderStatus == 0" @click="receiptPack(record)">
        确认收货
    </a-button>
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
  title: " ",
  dataIndex: "operation",
  scopedSlots: { customRender: "operation" }
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
    receiptPack:function(record){
      console.log(record);
      let filterType = this.$store.state.filterType;
      console.log('调用前'+filterType);
      this.$store.dispatch('updatePackageEnwrapStatus',record,filterType);
    }
  },
  mounted:function(){
    this.$store.dispatch('getListFromBackEnd');
  },
    computed:{
    ...mapGetters([
      'getList'
    ]),
  },
  watch:{
    getList: function(){
      console.log('监听事件执行');
      this.data = this.$store.state.list;
    }
  },
}
</script>
