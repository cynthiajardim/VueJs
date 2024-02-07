import Vue from 'vue'
import App from './App.vue'
//import Contador from './ContadorComponent.vue'
import Contadores from './ContadoresComponents.vue'

//Vue.component('MeuContador', Contador)
Vue.component('MeusContadores', Contadores)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
