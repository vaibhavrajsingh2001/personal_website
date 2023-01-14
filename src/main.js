// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';

export default function(Vue, { head }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);

    Vue.use(VueScrollTo, {
        duration: 1200,
        easing: 'ease-in-out',
        offset: -200,
    });

    head.meta.push({
        name: 'keywords',
        content:
            'Vaibhav Raj Singh, Portfolio, Gridsome, Vue, Tailwind, Tailwind CSS, JavaScript, HTML, CSS, Vue.js, VueJS, React',
    });

    head.meta.push({
        name: 'description',
        content: 'Vaibhav Raj Singh',
    });

    head.meta.push({
        name: 'author',
        content: 'Vaibhav Raj Singh',
    });

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700',
    });

    // Add an external JavaScript before the closing </body> tag
    head.script.push({
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        defer: true,
        'data-cf-beacon': JSON.stringify({
            token: '45334ac7c5864f248239971eac668080',
        }),
        body: true,
    });
}
