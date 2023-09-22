
import {request2} from './request'

export function getQuadratId(queryInfo) {
  return request2({
    url: 'quadra/search_location',
    method: 'get',
    params: queryInfo
  })
}

export function getPartDetail(vegetation,plotsitdid) {
  return request2({
    url: 'quadra/search_partInfo',
    method: 'get',
    params: {
      vegetation,
      plotsitdid
    }
  })
}

export function getAllDetail(vegetation,sampleid) {
  return request2({
    url: 'quadra/search_quadraInfo',
    method: 'get',
    params: {
      vegetation,
      sampleid
    }
  })
}


export function getFullDetail(vegetation,plotsitdid) {
  return request2({
    url: 'quadra/search_fullInfo',
    method: 'get',
    params: {
      vegetation,
      plotsitdid
    }
  })
}
