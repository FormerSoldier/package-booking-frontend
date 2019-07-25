<template>
  <a-table 
    :columns="columns"
    :rowKey="record => record.login.uuid"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template >
      
    </template>
  </a-table>
</template>
<script>
import reqwest from 'reqwest';
import { Table } from 'ant-design-vue';

const columns = [{
  title: '运单号',
  dataIndex: 'order_id',
}, {
  title: '收件人',
  dataIndex: 'recipientsName',
}, {
  title: '电话',
  dataIndex: 'tel_phone',
},{
  title: '状态',
  dataIndex: 'order_status',
},{
  title: '预约时间',
  dataIndex: 'appointment_time',
}
];

export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch (params = {}) {
      console.log('params:', params);
      this.loading = true
      reqwest({
        url: 'https://randomuser.me/api',
        method: 'get',
        data: {
          results: 10,
          ...params,
        },
        type: 'json',
      }).then((data) => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    }
  },
  components:{
      'a-table': Table
  }
}
</script>
