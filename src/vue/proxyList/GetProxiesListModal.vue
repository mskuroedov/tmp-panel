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
          <p class="modal-title">Выбор списка прокси</p>
          <div class="d-flex gap-50">
            <div class="form-check">
              <input id="listTxt" class="form-check-input" type="radio"
                     name="listType"
                     v-model="listType"
                     value="txt">
              <label class="form-check-label d-flex flex-column" for="listTxt">
                TXT
              </label>
            </div>
            <div class="form-check">
              <input id="listCsv" class="form-check-input" type="radio"
                     name="listType"
                     v-model="listType"
                     value="csv">
              <label class="form-check-label d-flex flex-column" for="listCsv">
                CSV
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="getProxiesList">Получить список</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from "bootstrap";

export default {
  name: "GetProxiesListModal",
  data() {
    return {
      modal: null,
      listType: 'txt'
    }
  },
  methods: {
    show() {
      this.modal.show()
    },
    hide() {
      this.modal.hide()
    },
    getProxiesList() {
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