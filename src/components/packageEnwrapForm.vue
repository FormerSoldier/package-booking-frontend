<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
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

    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <!-- <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button> -->
    </a-form-item>
  </a-form>
</template>

<script>

export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(values);
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
  components:{
  }
};
</script>
