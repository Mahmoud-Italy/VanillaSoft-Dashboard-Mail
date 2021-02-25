import Vue from 'vue'
import Router from 'vue-router'

// mixen routers
import MailableRoutes from '@/router/modules/mailable'

var allRoutes = [];
allRoutes = allRoutes.concat(
      MailableRoutes
    )

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: '/',
  fallback: true,
  routes: allRoutes
})

