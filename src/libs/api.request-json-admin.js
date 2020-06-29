import HttpRequest from '@/libs/axios-json-admin'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const axios = new HttpRequest(baseUrl)
// axios.setHeader('TOKEN','123')
export default axios
