<template>
  <div>
    <a-button type="primary" @click="showModal">入库+</a-button>
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
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e);
      this.ModalText = '入库';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  },
  components:{
      PackageEnwrapForm
  }
}
</script>
