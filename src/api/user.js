import _$ from './index'

export const getUserInfo = ({ userId }) => {
  return _$.request({
    url: '/getUserInfo',
    method: 'post',
    data: { userId }
  })
}
