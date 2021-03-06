import Vue from 'vue';
import Home from './components/home';

const dust = window.dust;
const render = (mount) => {
    console.log('render', mount);
    const dom = document.createElement('div');
    dom.id = 'home-root';
    document.getElementById(mount).appendChild(dom);
    new Vue({
        el: `#${dom.id}`,
        render: (h) => h(Home),
    });
}
if (dust) {
    dust.start({
        name: 'home',
        render,
    });
} else {
    throw new Error('dust is not ready.');
}