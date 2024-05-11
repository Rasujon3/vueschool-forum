import PageHome from '../components/PageHome.vue'
import PageThreadShow from '../components/PageThreadShow.vue'
import PageNotFound from '../components/PageNotFound'
import {  createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
    { path: '/', name: 'Home', component: PageHome },
    { 
        path: '/thread/:id', 
        name: 'ThreadShow', 
        props: true, 
        component: PageThreadShow,
        beforeEnter (to, from, next) {
            // check if thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
            // if exists continue
            if (threadExists) {
                return next();
            } else { // if does not exists redirect to not found page
                next({ 
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') },
                    query: to.query,
                    hash: to.hash,
                })
            }
        }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
  ]

export default createRouter({
// history: createMemoryHistory(),
history: createWebHistory(),
routes,
})