import Mock from 'mockjs'
import { getUserInfo } from './reponse/user'
import { getFolderList, getFileList } from './reponse/data'

// Mock.mock('/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, getUserInfo)
Mock.mock('/getFolderList', getFolderList)
Mock.mock('/getFileList', getFileList)

export default Mock
