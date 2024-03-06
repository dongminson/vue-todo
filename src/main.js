import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/router/router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
library.add(faTrash);
app.component("font-awesome-icon", FontAwesomeIcon)

app.use(store);
app.use(router);

app.directive('focus', {
    mounted(el) {
        el.focus();
    },
});

app.mount('#app');