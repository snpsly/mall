import { request } from "../request";
export function getHomeMultiData(config) {
  return request({
    url: '/home/multidata'
  })
}