require('./bootstrap');

window.Vue = require('vue');

Vue.component('table-component', require('./components/TableComponent.vue').default);

const app = new Vue({
    el: '#app',
});
