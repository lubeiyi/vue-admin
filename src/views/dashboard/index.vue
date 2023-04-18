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
    <div style="margin-bottom:20px" v-for="(item, index) in serverStatus">
      <el-row :gutter="45">
        <el-col :span="2" align="center">
          <img src="@/assets/img/run.png" v-if="item.runStatus == 1" width="30px" height="30px">
          <img src="@/assets/img/error.png" v-if="item.runStatus == 2" width="30px" height="30px">
          <img src="@/assets/img/stop.png" v-if="item.runStatus == 3" width="30px" height="30px">
        </el-col>
        <el-col :span="4" align="center">{{item.serviceName}}</el-col>
        <el-col :span="2" align="center">
          <el-button type="primary" size="medium" v-if="item.runStatus == 1" @click="startServiceName(item.serviceName)">停止</el-button>
          <el-button type="primary" size="medium" v-if="item.runStatus == 3" @click="startServiceName(item.serviceName)">启动</el-button>
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
      serverStatus: [],
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
