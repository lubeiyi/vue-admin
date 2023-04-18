import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/hv-console/configLogin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/hv-console/configUserInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/hv-console/configLogout',
    method: 'post'
  })
}
