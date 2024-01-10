import { createApp } from 'vue'
import './styles/main.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'vue3-toastify/dist/index.css';
import './styles/style.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import VueAwesomePaginate from "vue-awesome-paginate";
import App from './App.vue'
import initializeRouter from './router'
// eslint-disable-next-line import/no-extraneous-dependencies
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App)

initializeRouter(app)

app.use(VueAwesomePaginate).mount('#app')
