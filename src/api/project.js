import {request} from './request'

export function getProIntroduction() {
  return request({
    url: 'projectIntro/detail/1'
  })
}


export function getReportList() {
  return request({
    url: 'report/list'
  })
}
