import Vue from 'vue';
import ProxyShop from "./proxyShop/ProxyShop";

const shopElId = '#panel-shop',
    shopEl = document.querySelector(shopElId)


Vue.filter('numberFormatted', function (value) {
    if (typeof value !== "number") return value;
    let val = parseInt(value)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
});


new Vue({
    render: createElement => {
        const context = {
            props: {...shopEl.dataset},
        };
        return createElement(ProxyShop, context);
    }
}).$mount(shopElId)