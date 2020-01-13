import Mock from 'mockjs'
import { getUserInfo, login, authorization } from './reponse/user'
import { getFolderList, getFileList, getTableData, sentFormData } from './reponse/data'

// Mock.mock('/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, getUserInfo)
Mock.mock(/\/login/, login)
Mock.mock(/\/authorization/, authorization)
Mock.mock('/getFolderList', getFolderList)
Mock.mock('/getFileList', getFileList)
Mock.mock(/\/getTableData/, getTableData)
Mock.mock(/\/formData/, sentFormData)

export default Mock
