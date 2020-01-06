import _$ from './index'

export const getUserInfo = ({ userId }) => {
  return _$.request({
    url: '/getUserInfo',
    method: 'post',
    data: { userId }
  })
}

export const login = ({ userName, password }) => {
  return _$.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export const authorization = () => {
  return _$.request({
    url: '/users/authorization'
    // method: 'get'
  })
}
