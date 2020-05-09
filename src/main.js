import Vue from 'vue';
import VueMeta from 'vue-meta';
import firebase from 'firebase/app';
import AuthPlugin from './plugins/auth.plugin';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(AuthPlugin);

firebase.initializeApp(firebaseConfig);

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
