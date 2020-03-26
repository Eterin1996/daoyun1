import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import CopClass from '@/components/EnterPage'
// import Table from '@/components/BaseTable'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'CopName',
      component: () => import(/* webpackChunkName: "table" */ '../components/EnterPage')
    },
    {
      path: '/enter',
      // name: 'Table',
      component: () => import(/* webpackChunkName: "table" */ '../components/BaseTable.vue')
      // component: Table
    }
  ]
})
