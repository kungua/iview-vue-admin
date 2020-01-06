import axios from 'axios'
import { baseURL } from '../config'
import { getToken } from './utils'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    return {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(
      config => {
        // 添加全局的 loading...
        // Spin.show()
        if (!Object.keys(this.queue).length > 0) {
          // Spin.show()
        }
        config.headers['Authorization'] = getToken()
        this.queue[url] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
      res => {
        delete this.queue[url]
        const { data } = res
        return data
      },
      error => {
        delete this.queue[url]
        return Promise.reject(error)
      }
    )
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
