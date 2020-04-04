import { observable } from 'mobx'
import Taro from '@tarojs/taro'
import { NodeType } from '../components/RenderView/Node'
import parseHTML from '../utils/parse'

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
  nodes: NodeType[]
  setMaxPid: (id: number, pid: number) => void
  setCategory: (id: number) => void
  getCategorys: () => void
  getIssues: (cid: number | string, id?: string) => void
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
  nodes: [],
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
    this.categorys = data.sort((a, b) => a.cid - b.cid)
  },
  async getIssues (cid = '1') {
    Taro.showLoading({
      title: 'Loading . . .'
    })
    const { data } = await Taro.request({
      url: `https://api.leeapps.cn/cooperpresses?category=${cid}`
    })
    const result = data[0]
    if (result) {
      this.issue = result
      const nodes = parseHTML(result.content.replace(/(amp;)/g, ''))
      this.nodes = nodes
    }
    Taro.hideLoading()
  }
})
export default weeklyStore