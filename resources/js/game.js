require('./bootstrap');

import Game from "./apps/Game.vue";
import Vue from "vue";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
    render: h => h(Game),
}).$mount('#game')
