import {request} from './request'

export function getDataList(userid,page) {
  return request({
    url: '/contextCollect/getContextCollectById',
    method: 'post',
    params: userid,page
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
