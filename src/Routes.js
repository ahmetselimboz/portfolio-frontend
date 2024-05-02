import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./frontend/pages/Homepage.vue";
import Works from "./frontend/pages/Works.vue";
import Blogs from "./frontend/pages/Blogs.vue";
import About from "./frontend/pages/About.vue";
import Contact from "./frontend/pages/Contact.vue";
import Work_Detail from "./frontend/pages/Work-Detail.vue";
import Blog_Detail from "./frontend/pages/Blog-Detail.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name:"homepage", component: Homepage },
    { path: "/homepage", name:"homepage", component: Homepage },
    { path: "/work", name:"work", component: Works },
    { path: "/work-detail/:id", name:"work-detail", component: Work_Detail, props: true },
    { path: "/blog", name:"blog", component: Blogs },
    { path: "/blog-detail/:id", name:"blog-detail", component: Blog_Detail, props: true },
    { path: "/about", name:"about", component: About },
    { path: "/contact", name:"contact", component: Contact },
  ],
});

export default routes;
