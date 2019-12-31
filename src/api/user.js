import _$ from './index'

export const getUserInfo = (params) => {
  return _$.request({
    url: '/assetEmpl/assetEmployee/poAcceptance/query.do',
    method: 'post',
    data: params
  })
}
