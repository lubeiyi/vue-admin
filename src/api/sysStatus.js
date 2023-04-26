import request from '@/utils/request'

export function getAllServiceStatus() {
  return request({
    url: '/hv-guard/guard/getAllService',
    method: 'get'
  })
}
