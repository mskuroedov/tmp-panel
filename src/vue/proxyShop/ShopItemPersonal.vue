<template>
  <div class="shop__item shop__item--personal">
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
      <Counter v-model="amount"/>
    </div>
    <div class="price">
      <div class="radio-pill">
        <div class="item-label">Месяц</div>
        <label>
          <input type="radio"
                 :name="uniquePriceRadioName"
                 :value="'month'"
                 v-model="periodSelected"
                 @change="changePeriod"
                 checked>
          <span class="radio-pill__inner">${{ shopItem.prices.month }}</span>
        </label>
      </div>
      <div class="radio-pill">
        <div class="item-label">Полгода</div>
        <label>
          <input type="radio"
                 :name="uniquePriceRadioName"
                 :value="'halfYear'"
                 v-model="periodSelected"
                 @change="changePeriod">
          <span class="radio-pill__inner">${{ shopItem.prices.halfYear }}</span>
        </label>
      </div>
      <div class="radio-pill">
        <div class="item-label">Год</div>
        <label>
          <input type="radio"
                 :name="uniquePriceRadioName"
                 :value="'year'"
                 v-model="periodSelected"
                 @change="changePeriod">
          <span class="radio-pill__inner">${{ shopItem.prices.year }}</span>
        </label>
      </div>
    </div>
    <div class="actions" v-if="showAddToCart">
      <button type="button"
              class="btn btn-primary w-100"
              @click="addToCart">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter";
import shopItem from "../mixins/shopItem";

export default {
  name: "ShopItemPersonal",
  components: {Counter},
  mixins: [shopItem],
  data() {
    return {
      amount: 1,
      periodSelected: 'month'
    }
  },
  methods: {
    addToCart() {
      let {id} = this.shopItem,
          {amount, periodSelected} = this;
      this.$emit('addToCart', {id, amount, periodSelected})
    }
  },
  mounted() {
    if (!!this.shopItem.amount) {
      this.amount = this.shopItem.amount;
    }
  }
}
</script>