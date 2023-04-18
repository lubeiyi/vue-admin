<template>
  <div>
    <el-form ref="config" :model="formData" :rules="rules" size="medium" label-width="150px">
      <el-divider content-position="left">基础配置</el-divider>
      <el-form-item label="数据源" prop="dataSource">
        <el-select v-model="formData.dataSource" placeholder="请选择数据源" filterable :style="{width: '30%'}">
          <el-option v-for="(item, index) in dataSourceOptions" :key="index" :label="item.label"
                     :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文件树显示" prop="treeMode">
        <el-radio-group v-model="formData.treeMode" size="medium">
          <el-radio v-for="(item, index) in treeModeOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="触控模式" prop="touchMode">
        <el-radio-group v-model="formData.touchMode" size="medium">
          <el-radio v-for="(item, index) in touchModeOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="允许web端" prop="allowWeb" required>
        <el-switch v-model="formData.allowWeb"></el-switch>
      </el-form-item>
      <el-form-item label="开启 '关于' " prop="keepCopyright" required>
        <el-switch v-model="formData.keepCopyright"></el-switch>
      </el-form-item>
      <el-form-item label="授权IP列表" prop="allowIps">
        <el-input v-model="formData.allowIps" placeholder="请输入授权IP列表" clearable :style="{width: '30%'}">
        </el-input>
      </el-form-item>
      <el-divider content-position="left">日志输出配置</el-divider>
      <el-form-item label="默认输出等级" prop="logLevel">
        <el-input v-model="formData.logLevel" placeholder="日志默认输出等级" clearable :style="{width: '30%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="最长保存天数" prop="logDay">
        <el-input v-model="formData.logDay" placeholder="请输入日志最长保存天数" clearable :style="{width: '30%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="每天日志最大数量" prop="logSize">
        <el-input v-model="formData.logSize" placeholder="请输入每天日志最多保存数量" clearable :style="{width: '30%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="每个日志文件大小" prop="logMax">
        <el-input v-model="formData.logMax" placeholder="请输入每个日志文件大小" clearable :style="{width: '30%'}">
        </el-input>
      </el-form-item>
      <el-divider content-position="left">数据源配置</el-divider>
      <el-row v-if="formData.dataSource == 'hollidcs'">
        <el-form-item label="dcsServerUrl" prop="dcsServerUrl">
          <el-input v-model="formData.dcsServerUrl" placeholder="请输入dcsServerUrl" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="dcsClientId" prop="dcsClientId">
          <el-input v-model="formData.dcsClientId" placeholder="请输入clientId" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="dcsSsoConsole" prop="dcsSsoConsole">
          <el-input v-model="formData.dcsSsoConsole" placeholder="请输入ssoConsole" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="dcsSsoService" prop="dcsSsoService">
          <el-input v-model="formData.dcsSsoService" placeholder="请输入ssoService" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="dcsResourceUrl" prop="dcsResourceUrl">
          <el-input v-model="formData.dcsResourceUrl" placeholder="请输入resourceUrl" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="dcsPermissionUrl" prop="dcsPermissionUrl">
          <el-input v-model="formData.dcsPermissionUrl" placeholder="请输入permissionUrl" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row v-if="formData.dataSource == 'holliview'">
        <el-form-item label="CCTOOL地址" prop="scadaProjServerUrl">
          <el-input v-model="formData.scadaProjServerUrl" placeholder="请输入CCTOOL地址" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="WebAPI" prop="scadaWebapiUrl">
          <el-input v-model="formData.scadaWebapiUrl" placeholder="请输入WebAPI" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="session过期时间" prop="defaultSessionTimeout">
          <el-input v-model="formData.defaultSessionTimeout" placeholder="请输入session过期时间" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="登陆页面" prop="scadaLoginPage">
          <el-input v-model="formData.scadaLoginPage" placeholder="请输入登陆页面JSON地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="密码页面" prop="scadaPwdPage">
          <el-input v-model="formData.scadaPwdPage" placeholder="请输入密码页面JSON地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="主页地址" prop="scadaHomePage">
          <el-input v-model="formData.scadaHomePage" placeholder="请输入主页JSON地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="开启免登录" prop="defaultNeedLogin" required>
          <el-switch v-model="formData.defaultNeedLogin" :active-value=false :inactive-value=true></el-switch>
        </el-form-item>
        <el-row v-if="!formData.defaultNeedLogin">
          <el-form-item label="用户名" prop="defaultUserName">
            <el-input v-model="formData.defaultUserName" placeholder="请输入用户名" :style="{width: '30%'}"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="defaultPassword">
            <el-input v-model="formData.defaultPassword" placeholder="请输入密码" show-password :style="{width: '30%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="角色" prop="defaultRole">
            <el-input v-model="formData.defaultRole" placeholder="请输入角色" :style="{width: '30%'}"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item label="开启验证码" prop="captcha" required>
          <el-switch v-model="formData.captcha"></el-switch>
        </el-form-item>
      </el-row>
      <el-row v-if="formData.dataSource == 'hollicube'">
        <el-form-item label="应用标识" prop="cubeClientId">
          <el-input v-model="formData.cubeClientId" placeholder="请输入应用标识" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="模型应用标识" prop="cubeModelId">
          <el-input v-model="formData.cubeModelId" placeholder="请输入模型应用标识" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="cubeSsoConsole" prop="cubeSsoConsole">
          <el-input v-model="formData.cubeSsoConsole" placeholder="请输入sso-console" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="cubeSsoService" prop="cubeSsoService">
          <el-input v-model="formData.cubeSsoService" placeholder="请输入sso-service" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="cubeIamService" prop="cubeIamService">
          <el-input v-model="formData.cubeIamService" placeholder="请输入iam-service" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="模型服务地址" prop="cubeModelUrl">
          <el-input v-model="formData.cubeModelUrl" placeholder="请输入模型服务地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="启用模型过滤" prop="cubeModelFiltered">
          <el-switch v-model="formData.cubeModelFiltered"></el-switch>
        </el-form-item>
        <el-form-item label="聚合服务地址" prop="cubeAggqueryUrl">
          <el-input v-model="formData.cubeAggqueryUrl" placeholder="请输入聚合服务地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="WebSocket地址" prop="cubeSocketServiceUrl">
          <el-input v-model="formData.cubeSocketServiceUrl" placeholder="请输入WebSocket地址" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="报警数据服务" prop="cubeAlarmServiceUrl">
          <el-input v-model="formData.cubeAlarmServiceUrl" placeholder="请输入报警数据服务" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="报警确认服务" prop="cubeAlarmConfirmUrl">
          <el-input v-model="formData.cubeAlarmConfirmUrl" placeholder="请输入报警确认服务" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="事件服务" prop="cubeEventUrl">
          <el-input v-model="formData.cubeEventUrl" placeholder="请输入事件服务" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="物联服务" prop="cubeBffUrl">
          <el-input v-model="formData.cubeBffUrl" placeholder="请输入物联服务" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="租户/命名空间" prop="cubeSendMsgNamespace">
          <el-input v-model="formData.cubeSendMsgNamespace" placeholder="请输入租户/命名空间" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="指令下发(网关)服务" prop="cubeGatewayUrl">
          <el-input v-model="formData.cubeGatewayUrl" placeholder="请输入指令下发(网关)服务" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="预测模型服务地址" prop="cubePredictModelUrl">
          <el-input v-model="formData.cubePredictModelUrl" placeholder="请输入预测模型服务地址" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="预测数据服务" prop="cubePredictUrl">
          <el-input v-model="formData.cubePredictUrl" placeholder="请输入预测数据服务" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="Docker服务地址" prop="dockerServer">
          <el-input v-model="formData.dockerServer" placeholder="请输入Docker服务地址" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="Harbor仓库地址" prop="dockerHarbor">
          <el-input v-model="formData.dockerHarbor" placeholder="请输入Harbor仓库地址" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="Harbor仓库用户名" prop="dockerHarborNam">
          <el-input v-model="formData.dockerHarborNam" placeholder="请输入Harbor仓库用户名" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="Harbor仓库密码" prop="dockerHarborPwd">
          <el-input v-model="formData.dockerHarborPwd" placeholder="请输入Harbor仓库密码" show-password
                    :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="Harbor仓库联系人" prop="docker.dockerHarborEmail">
          <el-input v-model="formData.dockerHarborEmail" placeholder="请输入Harbor仓库联系人" :style="{width: '30%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="Harbor仓库类型" prop="dockerHarborType">
          <el-input v-model="formData.dockerHarborType" placeholder="请输入Harbor仓库类型" clearable
                    :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="Harbor租户/项目名" prop="dockerHarborRepValue">
          <el-input
            v-model="formData.dockerHarborRepValue"
            placeholder="请输入Harbor租户/项目名"
            clearable
            :style="{width: '30%'}"
          />
        </el-form-item>
      </el-row>
      <el-row v-if="formData.dataSource == 'holliunity'">
        <el-form-item label="服务注册中心地址" prop="serviceUrl">
          <el-input v-model="formData.iotServiceUrl" placeholder="请输入服务注册中心地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="项目ID" prop="projectId">
          <el-input v-model="formData.iotProjectId" placeholder="请输入项目ID" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="登陆页面" prop="iotLoginPage">
          <el-input v-model="formData.iotLoginPage" placeholder="请输入登陆页面JSON地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="密码页面" prop="iotPwdPage">
          <el-input v-model="formData.iotPwdPage" placeholder="请输入密码页面JSON地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
        <el-form-item label="主页地址" prop="iotHomePage">
          <el-input v-model="formData.iotHomePage" placeholder="请输入主页JSON地址" :style="{width: '30%'}"></el-input>
        </el-form-item>
      </el-row>
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
        dataSource: 'holliview',
        treeMode: true,
        touchMode: 'auto',
        allowWeb: true,
        captcha: true,
        keepCopyright: true,
        allowIps: '0.0.0.0',
        dcsServerUrl: 'http://172.21.32.180:8690',
        dcsClientId: 'holliview',
        dcsSsoConsole: 'http://172.21.32.180:8800',
        dcsSsoService: 'http://172.21.32.180:8790',
        dcsResourceUrl: 'http://172.21.32.180:8580',
        dcsPermissionUrl: 'http://172.21.32.180:8560',
        scadaProjServerUrl: 'http://127.0.0.1:9081',
        scadaWebapiUrl: 'http://127.0.0.1:8182',
        scadaLoginPage: '',
        scadaPwdPage: '',
        scadaHomePage: '',
        defaultNeedLogin: false,
        defaultUserName: 'Admin',
        defaultPassword: '6666669',
        defaultRole: 'Admin',
        defaultEnableMultiUser: false,
        defaultSessionTimeout: 60,
        cubeClientId: 'hollysys-holliview123',
        cubeModelId: 'holli-model',
        cubeSsoConsole: 'http://sso-svc-public.hollicube.com',
        cubeSsoService: 'http://sso-svc-bkend.hollicube.com',
        cubeIamService: 'http://iam-svc.hollicube.com',
        cubeModelUrl: 'http://model-svc.hollicube.com',
        cubeModelFiltered: false,
        cubeAggqueryUrl: 'http://aggquery-svc.hollicube.com',
        cubeSocketServiceUrl: 'ws://model-san-svc.hollicube.com',
        cubeAlarmServiceUrl: 'http://alarm-san-svc.hollicube.com',
        cubeAlarmConfirmUrl: 'http://alarm-cfm-svc.hollicube.com',
        cubeEventUrl: 'http://event-query-svc.hollicube.com',
        cubeBffUrl: 'http://model-holli-bff.hollicube.com',
        cubeSendMsgNamespace: 'hollysys-project123',
        cubeGatewayUrl: 'http://holli-iotda-data-engine-svc.hollysys-default:9111/iotda-data-engine',
        cubePredictModelUrl: 'http://127.0.0.1:28088',
        cubePredictUrl: 'http://127.0.0.1:18190',
        dockerServer: 'http://192.168.2.227:5500',
        dockerHarbor: '192.168.2.227:443',
        dockerHarborNam: 'hollysys',
        dockerHarborPwd: 'Hollysys1234',
        dockerHarborEmail: 'admin@example.com',
        dockerHarborType: 'default',
        dockerHarborRepValue: 'hollysys-hollysys123',
        dockerDav: 'dockerDav',
        contextPath: '',
        iotServiceUrl: 'http://172.21.75.237:8090',
        iotProjectId: '627d9113734a7e0013544ca3',
        iotLoginPage: '',
        iotPwdPage: '',
        iotHomePage: '',
        logLevel: 'info',
        logDay: '30',
        logSize: '',
        logMax: ''
      },
      rules: {
        dataSource: [{
          required: true,
          message: '请选择数据源',
          trigger: 'change'
        }],
        treeMode: [{
          required: true,
          message: '文件树显示不能为空',
          trigger: 'change'
        }],
        touchMode: [{
          required: true,
          message: '触控模式不能为空',
          trigger: 'change'
        }],
        allowIps: [{
          required: true,
          message: '请输入授权IP列表',
          trigger: 'blur'
        }],
        dcsServerUrl: [{
          required: true,
          message: '请输入dcsServerUrl',
          trigger: 'blur'
        }],
        dcsClientId: [{
          required: true,
          message: '请输入clientId',
          trigger: 'blur'
        }],
        dcsSsoConsole: [{
          required: true,
          message: '请输入ssoConsole',
          trigger: 'blur'
        }],
        dcsSsoService: [{
          required: true,
          message: '请输入ssoService',
          trigger: 'blur'
        }],
        resourceUrl: [{
          required: true,
          message: '请输入resourceUrl',
          trigger: 'blur'
        }],
        permissionUrl: [{
          required: true,
          message: '请输入permissionUrl',
          trigger: 'blur'
        }],
        scadaProjServerUrl: [{
          required: true,
          message: '请输入CCTOOL地址',
          trigger: 'blur'
        }],
        scadaWebapiUrl: [{
          required: true,
          message: '请输入WebAPI',
          trigger: 'blur'
        }],
        userName: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        role: [{
          required: true,
          message: '请输入角色',
          trigger: 'blur'
        }]
      },
      dataSourceOptions: [{
        'label': 'SCADA',
        'value': 'holliview'
      }, {
        'label': 'CUBE',
        'value': 'hollicube'
      }, {
        'label': 'DCS',
        'value': 'hollidcs'
      }, {
        'label': 'Unity',
        'value': 'holliunity'
      }, {
        'label': 'RTDB',
        'value': 'relationdb'
      }],
      treeModeOptions: [{
        'label': '树状显示',
        'value': true
      }, {
        'label': '平铺显示',
        'value': false
      }],
      touchModeOptions: [{
        'label': '自适应',
        'value': 'auto'
      }, {
        'label': '触屏',
        'value': 'true'
      }, {
        'label': '键鼠',
        'value': 'false'
      }],
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
        updateConfig(this.formData).then((data) => {
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
<style>
</style>
