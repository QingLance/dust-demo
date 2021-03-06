import Vue from 'vue';
import App1 from './components/app1';
import Test from './components/test';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/app1/test', component: Test }
    ]
});

const dust = window.dust;
const render = (mount) => {
    console.log('render', mount);
    const dom = document.createElement('div');
    dom.id = 'app1-root';
    document.getElementById(mount).appendChild(dom);
    new Vue({
        el: `#${dom.id}`,
        render: (h) => h(App1),
        router
    });
}
if (dust) {
    dust.start({
        name: 'app1',
        cache: true,
        render,
    });
} else {
    throw new Error('dust is not ready.');
}