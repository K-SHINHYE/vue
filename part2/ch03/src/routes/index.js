import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
// @는 root > src 역할

const routes = [
  { path: '/', component: MainPage},
  { path: '/login', component: LoginPage},
  { path: '/login', component: LoginPage },
  {
    path: '/profile',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      // token이 있으면 다음단계로 넘어감
      if (localStorage.getItem('token')) {
        next();
      } else {
        next('/login');
      }
    },
  },

];

const router = new VueRouter({
  routes
})

// router로 보내주기
export default router;
