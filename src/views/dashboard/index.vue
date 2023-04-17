<template>
  <el-form ref="$form" :model="model" label-position="left" label-width="100px" size="small">
    <el-row :gutter="20" type="flex" justify="start" align="top" tag="div" margin-bottom="10px">
      <el-col :span="6" tag="div">
        <el-button type="primary" size="medium"> 全部启动 </el-button>
      </el-col>
      <el-col :span="6" tag="div">
        <el-button type="primary" size="medium"> 全部停止 </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
      <el-col :span="2" :offset="0" :push="0" :pull="0" tag="div">
        状态
      </el-col>
      <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
        服务名
      </el-col>
      <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
        操作
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
      <el-col :span="2" :offset="0" :push="0" :pull="0" tag="div">
        运行
      </el-col>
      <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
        hv-video
      </el-col>
      <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
        <el-button type="primary" size="medium"> 启动 </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>

export default {
  components: {
    // JElDescription,

  },
  data() {
    return {
      name: '',
      forms: ['$form'],
      model: {
        description_1681435602870: ''
      },
      rules: {
        description_1681435602870: []
      },
      submit_loading: false
    }
  },
  computed: {

  },
  methods: {
    submit() {
      Promise.all(this.forms.map(form => this.$refs[form].validate()))
        .then(() => {
          this.submit_loading = true
          // TODO demo
          console.log(this.model)
          setTimeout(() => {
            this.submit_loading = false
          }, 3000)
        })
    },
    created() {

    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
