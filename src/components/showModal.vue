<template>
  <div>
    <a-modal
      title="菜鸟驿站"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      okText="确认"
      cancelText="取消"
    >
        <a-form
        :form="form"
        >
            <a-form-item
            label="运单号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            >
            <a-input
                v-decorator="[
                'orderId',
                {rules: [{message: 'Please input your note!' }]}
                ]"
            />
            </a-form-item>
            
            <a-form-item
            label="收件人"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            >
            <a-input
                v-decorator="[
                'recipientsName',
                {rules: [{message: 'Please input your note!' }]}
                ]"
            />
            </a-form-item>

            <a-form-item
            label="电话"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            >
            <a-input
                v-decorator="[
                'telPhone',
                {rules: [{message: 'Please input your note!' }]}
                ]"
            />
            </a-form-item>

            <a-form-item
            label="重量"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            >
            <a-input
                v-decorator="[
                'height',
                {rules: [{message: 'Please input your note!' }]}
                ]"
            />
            </a-form-item>
        </a-form>
    </a-modal>
  </div>
</template>
<script>
import PackageEnwrapForm from './packageEnwrapForm'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      ModalText: '包裹入库',
      visible: false,
      confirmLoading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  methods: {

    handleOk(e) {
      e.preventDefault();
      this.ModalText = '入库';
      this.confirmLoading = true;

      this.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        this.$store.dispatch('addPackageEnwrap',values)
        console.log('Received values of form: ', values);
      }
      });

      setTimeout(() => {
        this.$store.commit('setVisible',false);
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.$store.commit('setVisible',false);
    },
  },
  computed:{
    ...mapGetters([
      'getVisible'
    ])
  },
  watch:{
    getVisible: function(){
      console.log('visible is changed');
      this.visible =  this.$store.state.visible;
    }
  },
  components:{
      PackageEnwrapForm
  }
}
</script>
