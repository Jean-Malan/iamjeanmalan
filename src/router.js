import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('./pages/Blog.vue')
  },
  {
    // Specific blog post routes
    path: '/blog/ai-without-overcommitting',
    name: 'AiWithoutOvercommitting',
    component: () => import('./pages/blog/tech/AiWithoutOvercommitting.vue')
  },
  {
    // Generic blog post route - keep this as a fallback
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('./pages/BlogPost.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./pages/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router