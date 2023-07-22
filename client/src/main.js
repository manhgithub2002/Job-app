import { createApp } from 'vue';
import router from './router/index.js';
import axios from "axios";
import VueAwesomePaginate from "vue-awesome-paginate";
import App from './App.vue';
window.axios = axios;

const app =createApp(App);
app.use(router);
app.use(VueAwesomePaginate);
app.mount('#app');
