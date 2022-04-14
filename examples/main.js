import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from  '../components/lib/demo'
// import Card from '../components/lib/card'
// Vue.component('Demo', Demo)
// Vue.use(Demo)
// Vue.use(Card)

import 'vue-mooc-ui/dist/css/index.css'
import MUI from 'vue-mooc-ui'
Vue.use(MUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
