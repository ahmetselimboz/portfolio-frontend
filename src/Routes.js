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
    { path: "/works", component: Works },
    { path: "/work/:slug", component: Work_Detail},
    { path: "/blogs", component: Blogs },
    { path: "/blog/:slug", component: Blog_Detail},
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
  ],
});

export default routes;
