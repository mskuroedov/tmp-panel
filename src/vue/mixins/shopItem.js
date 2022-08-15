export default {
    props: {
        shopItem: {
            type: Object
        },
        showDel: {
            type: Boolean,
            default: false
        },
        showBuy: {
            type: Boolean,
            default: false
        },
        showAddToCart: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            periodSelected: 'day'
        }
    },
    computed: {
        uniquePriceRadioName() {
            return `price-${this.shopItem.id}${parseInt(Math.random() * 1000)}`;
        },
    },
    methods: {
        changePeriod(e) {
            this.$emit('updateItemPeriod', e.target.value)
        }
    },
    mounted() {
        if (!!this.shopItem.periodSelected) {
            this.periodSelected = this.shopItem.periodSelected;
        }
    }
}