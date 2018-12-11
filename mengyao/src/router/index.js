import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import searchResult from '@/components/searchResult'//搜索结果
import genusList from '@/components/genusList' //科属分类
import genusChoose from '@/components/genusChoose' //科属分类选择
import partList from '@/components/partList' //药用部位列表
import allList from '@/components/allList' //全部药用列表
import plantDetail from '@/components/plantDetail' //药用植物详情
import guide from '@/components/guide' //引导页
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'guide',
      component: guide
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult
    },
    {
      path: '/genusList',
      name: 'genusList',
      component: genusList
    },
    {
      path: '/genusChoose',
      name: 'genusChoose',
      component: genusChoose
    },
    {
      path: '/partList',
      name: 'partList',
      component: partList
    },
    {
      path: '/allList',
      name: 'allList',
      component: allList
    },
    {
      path: '/plantDetail',
      name: 'plantDetail',
      component: plantDetail
    }
  ]
})
