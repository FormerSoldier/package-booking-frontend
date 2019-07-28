<template>
  <div>

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
                label="预约时间："
                validate-status="error"
                :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
            >
                <a-date-picker style="width: 100%" />
            </a-form-item>                    
            <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
                -
            </span>
        </a-form>
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
