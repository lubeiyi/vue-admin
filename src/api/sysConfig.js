import request from '@/utils/request'
import { getUrlPre } from '@/utils/url'

export function getConfig() {
  return request({
    url: `/${getUrlPre()}/commonConfig`,
    method: 'get'
  })
}

export function updateConfig(params) {
  return request({
    url: `/${getUrlPre()}/modifyCommonConfig`,
    method: 'post',
    data: params,
    dataType: 'application/json'
  })
}
