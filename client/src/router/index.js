import { createRouter, createWebHistory}  from 'vue-router';
import admin from "./admin";
import auth from "./auth.js";
import applicants from "./applicants";
// import master from "../views/layout/master.vue";

const routes = [...admin,...auth,...applicants];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;