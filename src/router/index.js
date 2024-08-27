import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '../views/UserListView.vue'
import UserUpdateView from '../views/UserUpdateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: UserListView
    },
    {
      path: '/user/create',
      name: 'user-add',
      component: UserUpdateView
    },
    {
      path: '/user/edit/:id',
      name: 'user-edit',
      component: UserUpdateView
    },
  ]
})

export default router
