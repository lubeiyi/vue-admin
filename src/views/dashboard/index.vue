<template>
  <el-form label-position="left" label-width="100px" size="small">
    <div style="margin-bottom:20px">
      <el-row :gutter="45">
        <el-col :span="6">
          <el-button type="primary" size="medium">全部启动</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" size="medium">全部停止</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="margin-bottom:20px">
      <el-row :gutter="45">
        <el-col :span="2" align="center">状态</el-col>
        <el-col :span="4" align="center">服务名</el-col>
        <el-col :span="2" align="center">操作</el-col>
      </el-row>
    </div>
    <div v-for="item in serverStatus" style="margin-bottom:20px">
      <el-row :gutter="45">
        <el-col :span="2" align="center">
          <img v-if="item.runStatus == 1" src="@/assets/img/run.png" width="30px" height="30px">
          <img v-if="item.runStatus == 2" src="@/assets/img/error.png" width="30px" height="30px">
          <img v-if="item.runStatus == 3" src="@/assets/img/stop.png" width="30px" height="30px">
        </el-col>
        <el-col :span="4" align="center">{{ item.serviceName }}</el-col>
        <el-col :span="2" align="center">
          <el-button v-if="item.runStatus == 1" type="primary" size="medium" @click="startServiceName(item.serviceName)">停止</el-button>
          <el-button v-if="item.runStatus == 3" type="primary" size="medium" @click="startServiceName(item.serviceName)">启动</el-button>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>
import { getAllServiceStatus } from '@/api/sysStatus'
export default {
  data() {
    return {
      serverStatus: []
    }
  },
  computed: {
  },
  created() {
    getAllServiceStatus().then(data => {
      this.serverStatus = data.data
    })
  },
  methods: {

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
