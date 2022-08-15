<template>
  <div class="counter">
    <div class="counter__label">
      {{ label }}
    </div>
    <div class="counter__input">
      <input type="number" size="2" max="99" min="1" :value="value">
      <button class="minus" @click="sub" :disabled="value === 1">
        <img :src="'./images/icons/minus.svg'" alt="">
      </button>
      <button class="plus" @click="add" :disabled="value >= 99">
        <img :src="'./images/icons/plus.svg'" alt="">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {
      test: 1
    }
  },
  methods: {
    add() {
      this.$emit('input', this.value + 1)
    },
    sub() {
      this.$emit('input', this.value - 1)
    },
  }
}
</script>