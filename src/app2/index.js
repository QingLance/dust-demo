import Vue from 'vue';
import App2 from './components/app2';

const dust = window.dust;
const render = (mount) => {
    console.log('render', mount);
    const dom = document.createElement('div');
    dom.id = 'app2-root';
    document.getElementById(mount).appendChild(dom);
    new Vue({
        el: `#${dom.id}`,
        render: (h) => h(App2),
    });
}
if (dust) {
    dust.start({
        name: 'app2',
        render,
    });
} else {
    throw new Error('dust is not ready.');
}