import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import MisEjercicios from './views/MisEjercicios';
import MisRutinas from './views/MisRutinas';
import Descubrir from './views/Descubrir';
import NotFound from './views/NotFound';
import Favoritos from "./views/Favoritos";
import LandingPage from "./views/LandingPage"
import ConfirmacionMail from "@/views/ConfirmacionMail";
import store from "./store";


Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.config.silent = true

export const router = new VueRouter({
  routes: [
    {path:'/', component: LandingPage},
    {path:'/MisRutinas', component: MisRutinas},
    {path:'/MisEjercicios', component: MisEjercicios},
    {path:'/Favoritos', component: Favoritos},
    {path:'/Descubrir', component: Descubrir},
    {path:'/ConfirmacionMail',component: ConfirmacionMail},
    {path:'*', component: NotFound}
  ]
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

