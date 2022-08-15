<template>
  <div class="shop__item shop__item--mobile"
       :class="itemAdditionalClasses">

    <div class="head">
      <div class="name">
        <div class="flag">
          <img :src="`./images/flags/${shopItem.iso}.svg`" alt="">
        </div>
        {{ shopItem.name }}
      </div>
      <div class="remove-from-cart" v-if="showDel">
        <a href="#" @click.prevent="$emit('delete')">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" fill="white" stroke="currentColor" stroke-width="2"/>
            <path d="M16.248 9.75285L9.75339 16.2461M16.25 16.25L9.75 9.75" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="middle">
      <div class="radio-group city-select">
        <div class="label">City:</div>
        <div class="radio-group__row">
          <label class="radio-item" v-for="city in shopItem.cities" :key="uniquePriceRadioName+city">
            <input type="radio"
                   :name="uniquePriceRadioName+'city'"
                   :value="city"
                   v-model="citySelected"
                   @change="changeCity"
                   checked>
            <span>{{ city }}</span>
          </label>
        </div>
      </div>
      <div class="radio-group period-select">
        <div class="label">Period:</div>
        <div class="radio-group__row price">
          <div class="radio-pill">
            <div class="item-label">День</div>
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
            <div class="item-label">Неделя</div>
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
            <div class="item-label">Месяц</div>
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
      <div class="radio-group operator-select">
        <div class="label">Operator:</div>
        <div class="radio-group__row">
          <div class="radio-pill" v-for="operator in shopItem.operators" :key="uniquePriceRadioName+operator">
            <label>
              <input type="radio"
                     :name="`${uniquePriceRadioName}-operator`"
                     :value="operator"
                     v-model="operatorSelected"
                     @change="changeOperator"
                     checked>
              <span class="radio-pill__inner">
                <img :src="`./images/mobile-operators/${operator}.svg`" alt="">
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="actions" v-if="showAddToCart">
      <button type="button"
              class="btn btn-primary"
              @click="addToCart">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>
import shopItem from "../mixins/shopItem";

export default {
  name: "ShopItemMobile",
  mixins: [shopItem],
  data() {
    return {
      operatorSelected: null,
      citySelected: null,
    }
  },
  computed: {
    itemAdditionalClasses() {
      if (this.shopItem.iso === 'US') {
        return 'item-full-width --usa'
      }
      return ''
    }
  },
  methods: {
    addToCart() {
      let {id} = this.shopItem,
          {operatorSelected, citySelected} = this;
      this.$emit('addToCart', {id, operatorSelected, citySelected})
    },
    changeCity(e) {
      this.$emit('updateItemCity', e.target.value)
    },
    changeOperator(e) {
      this.$emit('updateItemOperator', e.target.value)
    }
  },
  mounted() {
    this.operatorSelected = !!this.shopItem.operatorSelected
        ? this.shopItem.operatorSelected
        : this.shopItem.operators[0]
    this.$emit('updateItemCity', this.operatorSelected)

    this.citySelected = !!this.shopItem.citySelected
        ? this.shopItem.citySelected
        : this.shopItem.cities[0]
    this.$emit('updateItemOperator', this.citySelected)
  }
}
</script>