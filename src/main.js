import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PhosphorVue from 'phosphor-vue';
import Button from './components/__Global/Button/Button.vue';

const app = createApp(App);

app.component('Button', Button);
app.use(router);
app.use(store);
app.use(PhosphorVue);
app.mount('#app');
