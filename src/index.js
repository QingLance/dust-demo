/**
 * 入口文件
 */
import dust from 'dust-core';

dust.registerApplication({
    name: 'home',
    entry: 'home.js',
    active: () => true,
});

dust.registerApplication({
    name: 'app1',
    entry: 'app1.js',
    mountId: 'other-app',
    active: (location) => location.hash.startsWith('#/app1'),
});
dust.registerApplication({
    name: 'app2',
    entry: 'app2.js',
    mountId: 'other-app',
    active: (location) => location.hash.startsWith('#/app2'),
});

dust.boot();