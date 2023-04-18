import request from '@/utils/request'

export function getConfig() {
  return request({
    url: '/hv-console/commonConfig',
    method: 'get'
  })
}

export function updateConfig(params) {
  return request({
    url: '/hv-console/modifyCommonConfig',
    method: 'post',
    data: params,
    dataType: 'application/json'
  })
}
