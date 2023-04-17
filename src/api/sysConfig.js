import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function updateConfig(params) {
  return request({
    url: '/modifyCommonConfig',
    method: 'post',
    data: params,
    dataType: 'application/json'
  })
}
