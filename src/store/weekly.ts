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
  color: string
}

export interface Issue {
  pid: string
  title: string
  content: string
  // content_cn: string
  date: string
}

export interface WeeklyStoreInterface {
  categorys: Category[]
  tab: number
  cid: number
  issue: Issue
  isCN: boolean
  cTitle: string
  targetPost: string
  setMaxPid: (pid: number) => void
  setCategory: (id: number) => void
  getCategorys: () => void
  getIssues: (id?: number) => Promise<string>
  setCN: (bol) => void
  getFetch: (id) => Promise<any>
  getPost: (id) => Promise<any>
  fetchPost: (id) => Promise<any>
  setTarget: (url: string) => void
}


const weeklyStore: WeeklyStoreInterface = observable({
  categorys: [],
  tab: 0,
  cid: 1,
  issue: {
    pid: '',
    title: '',
    content: '',
    // content_cn: '',
    date: ''
  },
  isCN: false,
  cTitle: '',
  targetPost: '',
  setMaxPid (pid) {
    this.categorys[this.tab].maxId = pid
  },
  setCategory (id: number) {
    this.tab = id
    this.cid = this.categorys[id].cid
    this.cTitle = this.categorys[id].title
  },
  setCN (bol) {
    this.isCN = bol
  },
  async getCategorys () {
    const { data } = await Taro.request({
      url: 'https://api.leeapps.cn/cooperpress-categories'
    })
    this.categorys = data.sort((a, b) => a.oid - b.oid).map(v => ({...v, maxId: 0}))
    this.cTitle = this.categorys[0].title
  },
  async getIssues (id = 0) {
    const queryPid = id ? `&pid=${id}` : ''
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/cooperpresses?category=${this.cid}${queryPid}&_sort=pid:DESC&_limit=1`
    })
    let result = data[0]
    if (!result) {
      result = await this.getFetch(id)
    }
    if (result) {
      this.issue = result
      if (id === 0) {
        this.setMaxPid(Number(result.pid))
      }
      if (this.isCN && result.content_cn) {
        return result.content_cn.replace(/(amp;)/g, '')
      }
      return result.content.replace(/(amp;)/g, '')
    }
    return ''
  },
  async getFetch (id) {
    const queryPid = id ? `&id=${id}` : ''
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/koa/weekly/fetch?category=${this.cid}${queryPid}`
    })
    return data[0]
  },
  async getPost (id) {
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/cooperpress-posts?category=${this.cid}&pid=${id}&_limit=1`
    })
    let result = data[0]
    if (!result) {
      result = await this.fetchPost(id)
    }
    return result
  },
  async fetchPost (id) {
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/koa/weekly/post?category=${this.cid}&id=${id}&type=markdown`
    })
    return data[0]
  },
  setTarget (url) {
    this.targetPost = url
  }
})
export default weeklyStore