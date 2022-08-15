<template>
  <div class="shop__item shop__item--datacenter">
    <div class="remove-from-cart" v-if="showDel">
      <a href="#" @click.prevent="$emit('delete')">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="12" fill="white" stroke="currentColor" stroke-width="2"/>
          <path d="M16.248 9.75285L9.75339 16.2461M16.25 16.25L9.75 9.75" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    <div class="head">
      <div class="name">
        <div class="flag">
          <img :src="`./images/flags/${shopItem.iso}.svg`" alt="">
        </div>
        {{ shopItem.name }}
      </div>
      <div class="online-ips">
        <div class="item-label">Online IP:</div>
        <div class="item-text">{{ shopItem.online | numberFormatted }} IP</div>
      </div>
    </div>
    <div class="middle">
      <div class="price">
        <div class="radio-pill">
          <div class="item-label">Месяц</div>
          <label>
            <input type="radio"
                   :name="uniquePriceRadioName"
                   :value="'day'"
                   v-model="periodSelected"
                   @change="changePeriod"
                   checked>
            <span class="radio-pill__inner">${{ shopItem.prices.day }}</span>
          </label>
        </div>
        <div class="radio-pill">
          <div class="item-label">Полгода</div>
          <label>
            <input type="radio"
                   :name="uniquePriceRadioName"
                   :value="'week'"
                   v-model="periodSelected"
                   @change="changePeriod">
            <span class="radio-pill__inner">${{ shopItem.prices.week }}</span>
          </label>
        </div>
        <div class="radio-pill">
          <div class="item-label">Год</div>
          <label>
            <input type="radio"
                   :name="uniquePriceRadioName"
                   :value="'month'"
                   v-model="periodSelected"
                   @change="changePeriod">
            <span class="radio-pill__inner">${{ shopItem.prices.month }}</span>
          </label>
        </div>
      </div>
    </div>
    <div class="actions" v-if="showAddToCart">
      <button type="button"
              class="btn btn-primary"
              @click="addToCart">
        Добавить <span class="d-md-none d-lg-inline">в корзину</span>
      </button>
    </div>
  </div>
</template>

<script>
import shopItem from "../mixins/shopItem";

export default {
  name: "ShopItemDatacenter",
  mixins: [shopItem],
  data() {
    return {
      periodSelected: 'day'
    }
  },
  methods: {
    addToCart() {
      let {id} = this.shopItem,
          {amount, periodSelected} = this;
      this.$emit('addToCart', {id, amount, periodSelected})
    }
  }
}
</script>