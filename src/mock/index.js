import Mock from 'mockjs'
import { getUserInfo } from './reponse/user'

// Mock.mock('/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, getUserInfo)

export default Mock
