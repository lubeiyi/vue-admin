<template>
  <div>
    <el-form ref="config" :model="formData" :rules="rules" size="medium" label-width="250px">
      <el-divider content-position="left">限流配置</el-divider>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="2" :offset="0" :push="0" :pull="0" tag="div" />
        <el-col :span="2" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="时间窗口（s）" />
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="QPS" />
        </el-col>
      </el-row>
      <el-form-item label="权限服务" prop="dataSource" required>
        <el-input v-model="formData.hvconsoleSetIntervalSec" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.hvconsoleSetCount" placeholder="" type="number" min="1" />
      </el-form-item>
      <el-form-item label="数据服务" prop="dataSource" required>
        <el-input v-model="formData.hvdataSetIntervalSec" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.hvdataSetCount" placeholder="" type="number" min="1" />
      </el-form-item>
      <el-form-item label="数据库服务" prop="dataSource" required>
        <el-input v-model="formData.hvrtdbSetIntervalSec" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.hvrtdbSetCount" placeholder="" type="number" min="1" />
      </el-form-item>
      <el-form-item label="手机APP服务" prop="dataSource" required>
        <el-input v-model="formData.hvmobileSetIntervalSec" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.hvmobileSetCount" placeholder="" type="number" min="1" />
      </el-form-item>

      <el-divider content-position="left">熔断配置</el-divider>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="2" :offset="0" :push="0" :pull="0" tag="div" />
        <el-col :span="3" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="时间窗口（s）" />
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="超时时间（ms）" />
        </el-col>
      </el-row>
      <el-form-item label="权限服务" prop="dataSource" required>
        <el-input v-model="formData.degradeHvconsoleSetTimeWindow" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.degradeHvconsoleSetCount" placeholder="" type="number" min="1" />
      </el-form-item>
      <el-form-item label="数据服务" prop="dataSource" required>
        <el-input v-model="formData.degradeHvdataSetTimeWindow" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.degradeHvdataSetCount" placeholder="" type="number" min="1" />
      </el-form-item>
      <el-form-item label="数据库服务" prop="dataSource" required>
        <el-input v-model="formData.degradeHvrtdbSetTimeWindow" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.degradeHvrtdbSetCount" placeholder="" type="number" min="1" />
      </el-form-item>
      <el-form-item label="手机APP服务" prop="dataSource" required>
        <el-input v-model="formData.degradeHvmobileSetTimeWindow" placeholder="" type="number" min="1" />
        <el-input class="rightInput" v-model="formData.degradeHvmobileSetCount" placeholder="" type="number" min="1" />
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

import { getConfig, updateConfig } from '@/api/sysConfig'
import { Message } from 'element-ui'

export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        degradeHvconsoleSetCount: 1000,
        degradeHvconsoleSetTimeWindow: 300,
        degradeHvdataSetCount: 10000,
        degradeHvdataSetTimeWindow: 30,
        degradeHvrtdbSetCount: 10000,
        degradeHvrtdbSetTimeWindow: 30,
        degradeHvmobileSetCount: 10000,
        degradeHvmobileSetTimeWindow: 30,
        hvdataSetCount: 60,
        hvdataSetIntervalSec: 1,
        hvconsoleSetCount: 60,
        hvconsoleSetIntervalSec: 1,
        hvrtdbSetCount: 60,
        hvrtdbSetIntervalSec: 1,
        hvmobileSetCount: 60,
        hvmobileSetIntervalSec: 1
      },
      rules: {

      }

    }
  },
  computed: {},
  watch: {},
  created() {
    getConfig().then(data => {
      this.formData = data.data
    })
  },
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['config'].validate(valid => {
        if (!valid) return
        updateConfig(this.formData).then(data => {
          Message({
            message: '修改成功',
            type: 'success'
          })
        })
      })
    },
    resetForm() {
      this.$refs['config'].resetFields()
    }
  }
}

</script>
<style scoped>
.el-divider {
  margin: 30px 0;
  font-size: 50px;
  font-weight: bold;
}
.el-input{
  width: 10%;
}
.rightInput{
  margin-left: 50px;
}
</style>
