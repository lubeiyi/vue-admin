<template>
  <div>
    <el-form ref="config" :model="formData" :rules="rules" size="medium" label-width="150px">
      <el-divider content-position="left">限流配置</el-divider>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="3" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="服务名"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="时间窗口（s）"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="QPS"></el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="3" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item  prop="" label="HV-GUARD"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item :rules="rules" prop="" label-width="0px">
            <el-input v-model="input" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item :rules="rules" prop="" label-width="0px">
            <el-input v-model="input" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider content-position="left">熔断配置</el-divider>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="3" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="服务名"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="时间窗口（ms）"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="QPS"></el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="3" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item  prop="" label="HV-GUARD"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item :rules="rules" prop="" label-width="0px">
            <el-input v-model="input" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item :rules="rules" prop="" label-width="0px">
            <el-input v-model="input" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {

      },
      rules: {

      },

    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['config'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['config'].resetFields()
    },
  }
}

</script>
<style>
</style>
