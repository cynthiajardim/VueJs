import Vue from 'vue'
import App from './App.vue'
import MContador from './Meu-Contador.vue'

Vue.config.productionTip = false

Vue.component('meu-contador', MContador)

new Vue({
  render: h => h(App),
}).$mount('#app')


