import axios from '@/utils/http.js'
const BASE_URL = 'http://10.2.0.216:8080'

export function getBatchList () { // 查询所有批号
  return axios.post(`${BASE_URL}/mes/warehouseInfo/storage/getBatchList`)
}
