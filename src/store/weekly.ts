import { observable } from 'mobx'
import Taro from '@tarojs/taro'

export interface Category {
  id: number
  cid: number
  title: string
  href: string
  img: string
  description: string
  description_cn: string
  maxId: number
}

export interface Issue {
  pid: string
  title: string
  content: string
  content_cn: string
  date: string
}

export interface WeeklyStoreInterface {
  categorys: Category[]
  category: number
  issue: Issue
  isCN: boolean
  setMaxPid: (id: number, pid: number) => void
  setCategory: (id: number) => void
  getCategorys: () => void
  getIssues: (cid: number | string, id?: number) => Promise<string>
  setCN: (bol) => void
  getFetch: (cid, id) => Promise<any>
  getPost: (cid, id) => Promise<any>
  fetchPost: (cid, id) => Promise<any>
}


const weeklyStore: WeeklyStoreInterface = observable({
  categorys: [],
  category: 1,
  issue: {
    pid: '',
    title: '',
    content: '',
    content_cn: '',
    date: ''
  },
  isCN: false,
  setMaxPid (id, pid) {
    this.categorys[id].maxId = pid
  },
  setCategory (id: number) {
    this.category = id
  },
  setCN (bol) {
    this.isCN = bol
  },
  async getCategorys () {
    const { data } = await Taro.request({
      url: 'https://api.leeapps.cn/cooperpress-categories'
    })
    this.categorys = data.sort((a, b) => a.cid - b.cid).map(v => ({...v, maxId: 0}))
  },
  async getIssues (cid = '1', id = 0) {
    const queryPid = id ? `&pid=${id}` : ''
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/cooperpresses?category=${cid}${queryPid}&_sort=pid:DESC&_limit=1`
    })
    let result = data[0]
    if (!result) {
      result = await this.getFetch(cid, id)
    }
    if (result) {
      this.issue = result
      if (id === 0) {
        this.setMaxPid(Number(cid) - 1, Number(result.pid))
      }
      if (this.isCN && result.content_cn) {
        return result.content_cn.replace(/(amp;)/g, '')
      }
      return result.content.replace(/(amp;)/g, '')
    }
    return ''
  },
  async getFetch (cid, id) {
    const queryPid = id ? `&id=${id}` : ''
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/koa/weekly/fetch?category=${cid}${queryPid}`
    })
    return data[0]
  },
  async getPost (cid, id) {
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/cooperpress-posts?category=${cid}&pid=${id}&_limit=1`
    })
    let result = data[0]
    if (!result) {
      result = await this.fetchPost(cid, id)
    }
    return result
  },
  async fetchPost (cid, id) {
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/koa/weekly/post?category=${cid}&id=${id}`
    })
    return data[0]
  }
})
export default weeklyStore