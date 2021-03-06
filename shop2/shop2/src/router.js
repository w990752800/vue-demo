import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import store from "./store";

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path: "/about",
      name: "about",
      meta: { 
        auth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to,from,next)=>{ 
  if(to.meta.auth){ 
    if(store.state.token){ 
      next();
    }else{  
      next({  
        path:'/login',
        query: {  
          redirect: to.path
        }
      })
    }
  }else{  
    next();
  }
})

export default router;
