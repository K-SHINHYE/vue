import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'

Vue.config.productionTip = false
// Vue Router사용한다고 선언해주기
Vue.use(VueRouter);

// 이 부분이 앞으로 길얼질 거라서 파일로 따로 관리할 거
// src > routes > index.js
// import할 때, 찾을 파일을 따로 명시해주지 않아도 index.js를 제일 먼저 찾음
// const routes = [
//   { path: '/', component: MainPage},
//   { path: '/login', component: LoginPage},
//   { path: '/profile', component: ProfilePage}

// ];

// const router = new VueRouter({
//   routes
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
