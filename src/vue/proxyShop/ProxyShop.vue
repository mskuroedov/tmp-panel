<template>
  <div>
    <AuthMethodModal ref="authModal" @applyAuthMethod="buy($event)"/>
    <div class="shop__grid" :class="shopItemsGridClass">
      <component :is="shopItemComponent"
                 v-for="(item,i) in shopItems"
                 :shop-item="item"
                 show-buy
                 show-add-to-cart
                 @addToCart="addToCart($event)"
                 :key="i"/>
    </div>
    <Cart v-if="cartTouched"
          :cart-component="shopItemComponent"
          :cart-items="cartItems"
          :grid-class="shopItemsGridClass"
          @updateItemPeriod="updateItemPeriod"
          @updateItemCity="updateItemCity"
          @updateItemOperator="updateItemOperator"
          @removeItem="rmFromCart($event)"
          @buy="prepareToBuy"/>
  </div>
</template>

<script>
import Cart from "./Cart";
import ShopItemPersonal from "./ShopItemPersonal";
import ShopItemMobile from "./ShopItemMobile";
import ShopItemDatacenter from "./ShopItemDatacenter";
import AuthMethodModal from "./AuthMethodModal";

export default {
  name: "ProxyShop",
  components: {AuthMethodModal, Cart},
  props: {
    shopType: {
      type: String,
      default: 'personal'
    }
  },
  data() {
    let fakeData = {
      personal: new Array(12).fill().map((e, i) => {
        return {
          id: i + 1,
          iso: 'RU',
          name: 'Russia',
          prices: {
            month: 5,
            halfYear: 25,
            year: 47,
          }
        }
      }),
      datacenter: new Array(4).fill().map((e, i) => {
        return {
          id: i + 1,
          iso: 'RU',
          name: 'Russia',
          online: 2000,
          prices: {
            day: 30,
            week: 150,
            month: 600,
          }
        }
      }),
      mobile: new Array(7).fill().map((e, i) => {
        return {
          id: i + 1,
          iso: i ? 'RU' : 'US',
          name: i ? 'Russia' : 'USA',
          cities: ['Эссен', 'Берлин', 'Берлин', 'Берлин'],
          operators: ['t-mobile', 't-mobile', 'verizon'],
          prices: {
            day: 5,
            week: 15,
            month: 20,
          }
        }
      }),
    }
    return {
      shopItems: fakeData[this.shopType],
      cartTouched: false,
      cartItems: []
    }
  },
  computed: {
    shopItemComponent() {
      const shopTypes = {
        'personal': ShopItemPersonal,
        'mobile': ShopItemMobile,
        'datacenter': ShopItemDatacenter
      }
      return shopTypes[this.shopType]
    },
    shopItemsGridClass() {
      const shopGridClasses = {
        'personal': 'shop__grid--personal',
        'mobile': 'shop__grid--mobile',
        'datacenter': 'shop__grid--datacenter'
      }
      return shopGridClasses[this.shopType]
    }
  },
  methods: {
    addToCart({id, ...additionalData}) {
      if (!this.cartTouched) this.cartTouched = true;
      let itemToAdd = this.shopItems.find(item => item.id === id);

      if (itemToAdd) {
        this.cartItems.push({...itemToAdd, ...additionalData})
      }
    },
    updateItemPeriod({index, period}) {
      this.cartItems[index].period = period
    },
    updateItemCity({index, city}) {
      this.cartItems[index].citySelected = city
    },
    updateItemOperator({index, operator}) {
      this.cartItems[index].operatorSelected = operator
    },
    rmFromCart(index) {
      this.$delete(this.cartItems, index);
    },
    prepareToBuy() {
      let userHasEnoughBalance = true,
          needCredentials = this.shopType !== 'datacenter'
      if (!userHasEnoughBalance) {
        //redirect to payments
        window.location.href = 'payment.html';
      } else {
        if (needCredentials) {
          this.$refs.authModal.showModal();
        } else {
          this.buy();
        }
      }
    },
    buy(authObj) {
      const needCredentials = this.shopType !== 'datacenter'
      if (needCredentials) {
        console.log(authObj)
        //todo axios to buy then reload ?
      } else {
        //todo axios to buy then reload ?
      }
    }
  }
}
</script>