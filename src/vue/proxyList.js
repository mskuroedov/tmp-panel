import Vue from 'vue/dist/vue.js';
import CopyText from "./proxyList/proxyItem/CopyText";
import AuthMethodControl from "./proxyList/proxyItem/AuthMethodControl";
import NameControl from "./proxyList/proxyItem/NameControl";
import GetProxiesListModal from "./proxyList/GetProxiesListModal";
import ProlongProxyModal from "./proxyList/ProlongProxyModal";

Vue.component('CopyText', CopyText)
Vue.component('AuthMethodControl', AuthMethodControl)
Vue.component('NameControl', NameControl)
Vue.component('GetProxiesListModal', GetProxiesListModal)
Vue.component('ProlongProxyModal', ProlongProxyModal)

let proxyList = new Vue({
    el: '#proxy-list',
    methods: {
        getProxiesList() {
            this.$refs.getProxiesModal.show();
        },
        prolongProxy() {
            this.$refs.prolongProxyModal.show();
        }
    }
})