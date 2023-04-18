import request from '@/utils/request'

export function getAllServiceStatus() {
  return request({
    url: '/hv-guard/guard/getAllService',
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
