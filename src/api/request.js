import axios from "axios";
// 这里是一个二次封装，导出实例的方式
export function request(config) {

  const instance = axios.create({
    // baseURL: 'http://113.55.120.105:8084',  //部署环境
    baseURL: 'http://localhost:8000',  //测试环境
    timeout: 10000,
  })
  return instance(config)
}

export function request2(config) {

  const instance = axios.create({
    baseURL: 'http://localhost:8000',  //测试环境
    timeout: 10000,
  })
  return instance(config)
}
