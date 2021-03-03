import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Profile from "../views/Profile.vue"
import Detail from "../views/Detail.vue"
import store from "../store/index"
import First from "../views/First.vue"
import Share from "../views/Share.vue"

Vue.use(VueRouter)

const routes = [
{
 path: '/login',
 name: 'login',
 component: Login
}, {
  path: '/',
  name: 'first',
  component: First
},{
 path: '/home',
 name: 'Home',
 component: Home,
 meta: {
   requireAuth: true,
 },
}, {
  path: '/signup',
  name: 'signup',
  component: SignUp,
}, {
  path: '/profile',
  name: "profile",
  component: Profile,
  meta: {
    requireAuth: true,
  },
}, {
  path: "/detail/:id",
  name: "detail",
  component: Detail,
  meta: {
    requireAuth: true,
  },
  props: true,
}, {
  path: '/share',
  name: 'share',
  component: Share,
}]

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router