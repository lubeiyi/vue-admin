<template>
  <div>
    <el-form ref="config" :model="formData" :rules="rules" size="medium" label-width="150px">
      <el-divider content-position="left">限流配置</el-divider>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="3" :offset="0" :push="0" :pull="0" tag="div">

        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="时间窗口（s）"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="QPS"></el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="控制服务" prop="dataSource">
        <el-input v-model="formData.hvconsoleSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.hvconsoleSetIntervalSec" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>
      <el-form-item label="数据服务" prop="dataSource">
        <el-input v-model="formData.hvdataSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.hvdataSetIntervalSec" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>
      <el-form-item label="数据库服务" prop="dataSource">
        <el-input v-model="formData.hvrtdbSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.hvrtdbSetIntervalSec" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>
      <el-form-item label="手机APP服务" prop="dataSource">
        <el-input v-model="formData.hvmobileSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.hvmobileSetIntervalSec" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>

      <el-divider content-position="left">熔断配置</el-divider>
      <el-row :gutter="20" type="flex" justify="start" align="top" tag="div">
        <el-col :span="3" :offset="0" :push="0" :pull="0" tag="div">
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="时间窗口（ms）"></el-form-item>
        </el-col>
        <el-col :span="4" :offset="0" :push="0" :pull="0" tag="div">
          <el-form-item label="QPS"></el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="控制服务" prop="dataSource">
        <el-input v-model="formData.degradeHvconsoleSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.degradeHvconsoleSetTimeWindow" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>
      <el-form-item label="数据服务" prop="dataSource">
        <el-input v-model="formData.degradeHvdataSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.degradeHvdataSetTimeWindow" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>
      <el-form-item label="数据库服务" prop="dataSource">
        <el-input v-model="formData.degradeHvrtdbSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.degradeHvrtdbSetTimeWindow" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>
      <el-form-item label="手机APP服务" prop="dataSource">
        <el-input v-model="formData.degradeHvmobileSetCount" placeholder="" clearable :style="{width: '20%'}"/>
        <el-input v-model="formData.degradeHvmobileSetTimeWindow" placeholder="" clearable :style="{width: '20%'}"/>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
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

      },

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
    },
  }
}

</script>
<style>
</style>
