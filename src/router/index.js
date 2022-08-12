import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  // This is where the views are routed to the app
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobsdetails',
    component: JobsDetails,
    props: true
  },
  //Redirect from an old and not in use or changed url to the new url
  {
    path: '/all-jobs',
    redirect:'/jobs'
  },
  //Catchall 404 
  {
    path: '/:catchAll(.*)',
    name:'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
