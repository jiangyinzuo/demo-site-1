// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vuex from 'vuex'
import VCharts from 'v-charts'
import vueEventCalendar from 'vue-event-calendar'
import 'vue-event-calendar/dist/style.css'

Vue.use(iView)
Vue.use(Vuex)
Vue.use(VCharts)
Vue.use(vueEventCalendar, {locale: 'zh',color: '#9bd4ff'})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
