import {request} from './request'

export function getDataList(condition) {
  return request({
    url: 'dataset/list',
    method: 'get',
    params: condition
  })
}

export function getDatesetByTwoId(id,userid) {
  return request({
    url: 'dataset/download/'+id+'/'+userid,
    method: 'get',
  })
}


export function getMetadataByTwoId(id,userid) {
  return request({
    url: 'dataset/download_metadata/'+id+'/'+userid,
    method: 'get',
  })
}
