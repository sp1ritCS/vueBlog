import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import BlogPosts from "@/views/BlogPosts.vue";
import BlogPost from "@/views/BlogPost.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Overview",
    component: BlogPosts
  },
  {
    path: "/read/:id",
    name: "Read Blogentry",
    component: BlogPost,
    props: true
  },
  {
    path: "/me",
    name: "Contact me",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
