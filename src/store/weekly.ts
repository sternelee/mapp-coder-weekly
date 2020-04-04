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
  contentCn: string
  date: string
}

export interface WeeklyStoreInterface {
  categorys: Category[]
  category: number
  issue: Issue
  setMaxPid: (id: number, pid: number) => void
  setCategory: (id: number) => void
  getCategorys: () => void
  getIssues: (cid: number | string, id?: number) => Promise<string>
}


const weeklyStore: WeeklyStoreInterface = observable({
  categorys: [],
  category: 1,
  issue: {
    pid: '',
    title: '',
    content: '',
    contentCn: '',
    date: ''
  },
  setMaxPid (id, pid) {
    this.categorys[id].maxId = pid
  },
  setCategory (id: number) {
    this.category = id
  },
  async getCategorys () {
    const { data } = await Taro.request({
      url: 'https://api.leeapps.cn/cooperpress-categories'
    })
    this.categorys = data.sort((a, b) => a.cid - b.cid).map(v => ({...v, maxId: 0}))
  },
  async getIssues (cid = '1', id = 0) {
    const queryPid = id ? `pid=${id}` : ''
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/cooperpresses?category=${cid}${queryPid}`
    })
    const result = data[0]
    if (result) {
      this.issue = result
      if (id === 0) {
        this.setMaxPid(Number(cid) - 1, Number(result.pid))
      }
      return result.content.replace(/(amp;)/g, '')
    }
    return ''
  }
})
export default weeklyStore