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
  watch:{
      'this.$store.state.list':function(){
          this.data = this.$store.getters.getList;
      }
  },
  mounted:function(){
    this.$axios
    .get('/package-bookings')
    .then(res => {
      this.data = res.data;})
    .catch(error => {
      console.log('发生了错误'+error);
    })
  }
}
</script>
