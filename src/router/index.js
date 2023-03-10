import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TasksView from '@/views/tasks/TasksId.vue'
import store from '@/store/index.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true,
  },
  {
    path: '/tasks/:course/:task',
    name: 'task',
    component: TasksView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const statusCode = store.dispatch('getUserToken')
  if (statusCode.status !== 200) {
    store.commit('modals/setModal', { name: 'RedirectModal', data: 'Вы будете перенаправлены на главную страницу через 5 секунд' })
  } else {
    next()
  }
})

export default router
