<template>
  <div class="shop__cart">
    <div class="shop__cart__head">
      <h4 class="h4">
        <img :src="'./images/icons/cart.svg'" alt="">
        Корзина
      </h4>
    </div>
    <template v-if="cartItems.length">
      <div class="shop__grid" :class="gridClass">
        <component v-for="(item,i) in cartItems" :key="item.id"
                   :is="cartComponent"
                   :shop-item="item"
                   show-del
                   @updateItemPeriod="$emit('updateItemPeriod',{index:i,period:$event})"
                   @delete="$emit('removeItem',i)"/>
      </div>
      <div class="shop__cart__actions">
        <button class="btn btn-primary" @click="$emit('buy')">Купить</button>
      </div>
    </template>
    <div class="shop__cart__empty" v-else>
      <img :src="'./images/cart-empty.svg'" alt="">
      <h4 class="h4">Выберите прокси, которые хотите приобрести</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cartItems: {
      type: Array,
      default: () => []
    },
    cartComponent: {
      required: true
    },
    gridClass: {
      type: String,
      default: ''
    }
  }
}
</script>