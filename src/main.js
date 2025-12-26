//Подключение стилей
import './assets/css/main.css';
import './assets/css/root.css'; 

//Добавление модулей
import router from "./modules/router";
import { createPinia } from 'pinia';

//Создание приложения
import { createApp } from 'vue';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

//Монтирование приложения
app.mount('#app');
