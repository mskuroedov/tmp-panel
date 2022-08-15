<template>
  <div class="modal ls-custom-modal" ref="modal" tabindex="-1" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="white" stroke="currentColor" stroke-width="2"/>
            <path d="M19.9975 12.0035L12.0042 19.9952M20 20L12 12" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="modal-body">
          <p class="modal-title">Метод авторизации</p>
          <div class="d-flex gap-50 mb-20">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="authType" id="authIp" value="ip" v-model="authType"
                     checked>
              <label class="form-check-label" for="authIp">
                IP
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="authType" id="authLoginPass" v-model="authType"
                     value="logpass">
              <label class="form-check-label" for="authLoginPass">
                Логин/Пароль
              </label>
            </div>
          </div>
          <div class="d-flex gap-20">
            <template v-if="authType === 'ip'">
              <div>
                <label for="ip" class="form-text mt-0 mb-5">IP</label>
                <input type="text" class="form-control" id="ip" v-model="authCredentials.ip.ip">
              </div>
            </template>
            <template v-else>
              <div>
                <label for="login" class="form-text mt-0 mb-5">Логин</label>
                <input type="text" class="form-control" id="login" v-model="authCredentials.logpass.login">
              </div>
              <div>
                <label for="pass" class="form-text mt-0 mb-5">Пароль</label>
                <input type="text" class="form-control" id="pass" v-model="authCredentials.logpass.password">
              </div>
            </template>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="applyModal">Продолжить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Modal} from 'bootstrap';
//ip regexp
//^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$
export default {
  name: "AuthMethodModal",
  data() {
    return {
      modal: null,
      authType: 'ip',
      authCredentials: {
        ip: {
          ip: ''
        },
        logpass: {
          login: '',
          password: ''
        }
      }
    }
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    applyModal() {
      let {ip} = this.authCredentials.ip,
          {login, password} = this.authCredentials.logpass,
          data = this.authType === 'ip'
              ? {type: 'ip', ip}
              : {type: 'logpass', login, password}
      this.$emit('applyAuthMethod', data)
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  }
}
</script>