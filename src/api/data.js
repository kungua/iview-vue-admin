import _$ from './index'

export const getFolderList = () => {
  return _$.request({
    url: '/getFolderList',
    method: 'get',
  })
}

export const getFileList = () => {
  return _$.request({
    url: '/getFileList',
    method: 'get',
  })
}
