import {request} from './request'

export function getCoordinate(condition) {
  return request({
    url: 'soilplotinfo/coordinate_list',
    method: 'get',
    params: condition
  })
}

export function getSoilInfo(condition) {
  return request({
	  // 需要根据接口的不同，做不同的修改
    url: 'soilsampleinfo/detail/'+condition,
  })
}

export function getSoilUrl(condition) {
  return request({
	  // 需要根据接口的不同，做不同的修改
    url: 'soilplotinfo/soilplotpictures/'+condition,
  })
}