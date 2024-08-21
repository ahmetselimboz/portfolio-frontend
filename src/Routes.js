import { createRouter, createWebHistory } from "vue-router";

// import Homepage from "./pages/Homepage.vue";
// import Works from "./pages/Works.vue";
// import Blogs from "./pages/Blogs.vue";
// import About from "./pages/About.vue";
// import Contact from "./pages/Contact.vue";
// import Work_Detail from "./pages/Work-Detail.vue";
// import Blog_Detail from "./pages/Blog-Detail.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: () => import("./pages/Homepage.vue"),
    },
    {
      path: "/homepage",
      name: "Home",
      component: () => import("./pages/Homepage.vue"),
    },
    {
      path: "/works",
      name: "Works",
      component: () => import("./pages/Works.vue"),
    },
    {
      path: "/work/:slug",
      name: "Work",
      component: () => import("./pages/Work-Detail.vue"),
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: () => import("./pages/Blogs.vue"),
    },
    {
      path: "/blog/:slug",
      name: "Blog",
      component: () => import("./pages/Blog-Detail.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./pages/About.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("./pages/Contact.vue"),
    },
    {
      path: "/privacy-policy",
      name: "Contact",
      component: () => import("./pages/Contact.vue"),
    },
  ],
});

export default routes;
