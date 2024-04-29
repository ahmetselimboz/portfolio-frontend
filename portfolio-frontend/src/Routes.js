import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import Works from "./pages/Works.vue";
import Blogs from "./pages/Blogs.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Work_Detail from "./pages/Work-Detail.vue";
import Blog_Detail from "./pages/Blog-Detail.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Homepage },
    { path: "/homepage", component: Homepage },
    { path: "/work", component: Works },
    { path: "/work-detail/:id", component: Work_Detail, props: true },
    { path: "/blog", component: Blogs },
    { path: "/blog-detail/:id", component: Blog_Detail, props: true },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
  ],
});

export default routes;
