import { createRouter, createWebHistory } from "vue-router"

import Homepage from "./pages/Homepage.vue"
import Works from "./pages/Works.vue"
import Blogs from "./pages/Blogs.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"

const routes = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/", component:Homepage},
        {path:"/homepage", component:Homepage},
        {path:"/work", component:Works},
        {path:"/blog", component:Blogs},
        {path:"/about", component:About},
        {path:"/contact", component:Contact},
    ]
})

export default routes;