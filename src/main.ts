import './scss/base';
import Vue from 'vue';
import App from './components/App';
import './globals';
import './ts/startup/inject-svg-sprite';

// 'You are running Vue in development mode. Make sure to turn on production
// mode when deploying for production'
Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
});

app.$mount('.app');
