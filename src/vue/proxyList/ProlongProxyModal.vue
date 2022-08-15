<template>
  <div class="modal ls-custom-modal" ref="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="white" stroke="currentColor" stroke-width="2"/>
            <path d="M19.9975 12.0035L12.0042 19.9952M20 20L12 12" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="modal-body">
          <p class="modal-title">Выбор длительности продления</p>
          <div class="d-flex gap-50">
            <div class="form-check" v-for="(type,i) in prolongData" :key="i">
              <input class="form-check-input"
                     :id="`prolong-${type.alias}`"
                     type="radio"
                     name="prolong"
                     v-model="prolongSelected"
                     :value="type.alias">
              <label class="form-check-label d-flex flex-column" :for="`prolong-${type.alias}`">
                <span class="p-secondary muted lh-26px">{{ type.name }}</span>
                <span class="h5">${{ type.price }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="prolongProxy">Продлить подписку</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";

export default {
  name: "ProlongProxyModal",
  data() {
    let prolongVariants = [
      [
        {
          name: 'День',
          alias: 'day',
          price: 5
        },
        {
          name: 'Неделя',
          alias: 'week',
          price: 25
        },
        {
          name: 'Месяц',
          alias: 'month',
          price: 47
        }
      ]
    ]
    return {
      modal: null,
      prolongData: prolongVariants[0],
      prolongSelected: prolongVariants[0].alias
    }
  },
  methods: {
    show() {
      this.modal.show()
    },
    hide() {
      this.modal.hide()
    },
    prolongProxy() {
      //todo logic
      this.hide()
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  }
}
</script>

<style scoped>

</style>