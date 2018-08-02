// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import $ from 'jquery'
// import VueI18n from 'vue-i18n'



Vue.prototype.$http = axios
Vue.config.productionTip = false
import '../static/styles/less/reset.css'//初始化style


Vue.use(VueAxios, axios, MintUI)


//https://github.com/hilongjw/vue-lazyload
import def_lazy_img from '../static/styles/img/loading.gif' //图片懒加载
Vue.use(VueLazyLoad, {
    loading: def_lazy_img,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: ['scroll']
})


// import * as httpFunc from 'services/httpFunc.js'

// httpFunc.fetchMethod()
// import { APP_CONFIG } from 'api/app.config.pro.js'

// httpFunc.httpFun(APP_CONFIG.apiUrls.BANKSET_LIST, 'post', {a:1,b:2})

import * as filters from './filter'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器

// import { filterEnumService, filterEnum} from './filter.pro'

// filterEnum(filterEnumService());

// import forFilter from './filter.pro'



// const i18n = new VueI18n({
//     locale: 'zh-CN',    // 语言标识
//     messages: {
//         'zh-CN': require('@/components/common/lang/zh'),   // 中文语言包
//         'en-US': require('@/components/common/lang/en')    // 英文语言包
//     }
// })





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    // i18n,
  components: { App },
  template: '<App/>'
})

