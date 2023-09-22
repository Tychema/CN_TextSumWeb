import {request} from './request'

export function getSpecimens(condition) {
  return request({
    url: 'herbarium/condition_list',
    method: 'get',
    params: condition
  })
}

export function getSpecimensDetail(condition) {
  return request({
	  // 需要根据接口的不同，做不同的修改
    url: 'herbarium/detail/'+condition,
  })
}