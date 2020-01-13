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

export const getTableData = () => {
  return _$.request({
    url: '/getTableData',
    method: 'get',
  })
}

export const sentFormData = (data) => {
  return _$.request({
    url: '/formData',
    data,
    method: 'post'
  })
}
