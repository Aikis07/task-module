import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import main from '@/assets/css/main.css'

import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
Vue.component ('ssr-carousel', SsrCarousel)


Vue.config.productionTip = false

import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
 breakpoints: { // default breakpoints - customize this
 sm:  450,
 md:  1250,
 lg: Infinity,
  }
})

new Vue({
  router,
  store,
  main,
  ssrCarouselCss,
  render: h => h(App)
}).$mount('#app')
