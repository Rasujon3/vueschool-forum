import PageHome from '../components/PageHome.vue'
import PageThreadShow from '../components/PageThreadShow.vue'
import {  createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: PageHome },
    { path: '/thread/:id', name: 'ThreadShow', props: true, component: PageThreadShow }
  ]

export default createRouter({
// history: createMemoryHistory(),
history: createWebHistory(),
routes,
})