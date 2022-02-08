import { createRouter, createWebHashHistory } from "vue-router";

import Composable from '@/components/Composable.vue'
import ComposationAPI from '@/components/ComposationAPI.vue'
import MultipleVModel from '@/components/MultipleVModel.vue'
import Suspense from '@/components/Suspense.vue'
import Teleport from '@/components/Teleport.vue'

const routes = [
  {
    path: '/',
    component: ComposationAPI
  },
  {
    path: '/teleport',
    component: Teleport
  },
  {
    path: '/suspense',
    component: Suspense
  },
  {
    path: '/multiplevmodel',
    component: MultipleVModel
  },
  {
    path: '/composable',
    component: Composable
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
