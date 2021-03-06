// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Layout from './components/layout'
import VRouter from 'vue-router'
import IndexPage from "./pages/index"
import DetailPage from "./pages/detail"
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
Vue.use(VRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */
let router = new VRouter ({
  mode:'history',
  routes: [
    //路由配置
      {
          path:'/',
          component:IndexPage
      },
      {
        path:'/detail',
        component:DetailPage,
        redirect:'/detail/analysis',
          children: [
            {
              path: 'analysis',
              component: DetailAnaPage
            },
            {
              path: 'count',
              component: DetailCouPage
            },
            {
              path: 'forecast',
              component: DetailForPage
            },
            {
              path: 'publish',
              component: DetailPubPage
            }

        ]
      }
  ]
})
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
