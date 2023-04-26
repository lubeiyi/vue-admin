
const serverName = ['hv-console', 'hv-data', 'hv-data', 'hv-mobile', 'hv-guard']
/**
 * 获取Url请求前缀[hv-console、hv-guard、hv-rtdb]
 */
export function getUrlPre() {
  const url = new URL(window.location.href)
  const firstPath = url.pathname.split('/')[1]
  if (serverName.includes(firstPath)) {
    return firstPath
  }
  return 'hv-console'
}
