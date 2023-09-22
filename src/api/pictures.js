import {request} from './request'

export function getCommunity(condition) {
  return request({
    url: 'photoinfo/coordinate_list',
    method: 'get',
    params: condition
  })
}

export function getPictureUrl(condition) {
  return request({
	  // 需要根据接口的不同，做不同的修改
    url: 'photoinfo/pictures/'+condition,
  })
}