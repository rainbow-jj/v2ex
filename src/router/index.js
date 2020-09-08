import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
// Vue.use()

export default new Router({
  routes: [
    { path: '/',component: Home }
  ]
})
