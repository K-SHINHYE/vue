import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

// 1. Define route components.
import HelloWorld from './components/HelloWorld.vue';
import LoginPage from './pages/LoginPage.vue';
// const Foo = { template: "<div>foo</div>" };
// const Bar = { template: "<div>bar</div>" };

// 2. Define some routes
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/login", component: LoginPage }
];

Vue.config.productionTip = false

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
});

// router를 쓴다고 선언하기
Vue.use(VueRouter);
new Vue({
  router,
  HelloWorld,
  LoginPage,
  render: h => h(App),
}).$mount('#app')
