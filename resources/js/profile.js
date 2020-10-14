require('./bootstrap');

import Profile from "./apps/Profile.vue";
import Vue from "vue";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
    render: h => h(Profile),
}).$mount('#profile')
