<template>
  <div class="name-control">
    <template v-if="isEditing">
      <input type="text" class="input" v-model="editName">
      <div class="name-control__actions">
        <button class="btn-icon btn-icon--primary">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.9817 1.20018C14.319 0.537439 13.2445 0.537439 12.5817 1.20018L6.58173 7.20016L3.52743 4.14586C2.86469 3.48312 1.79017 3.48312 1.12743 4.14586C0.464686 4.80861 0.464685 5.88312 1.12743 6.54587L5.37311 10.7916C5.37596 10.7944 5.37882 10.7973 5.3817 10.8002C5.50596 10.9245 5.6447 11.0254 5.79249 11.1031C5.84175 11.129 5.89202 11.1523 5.94309 11.173C6.55599 11.4216 7.28473 11.2973 7.78182 10.8003C7.78662 10.7954 7.7914 10.7906 7.79613 10.7858L14.9817 3.60019C15.6445 2.93744 15.6445 1.86293 14.9817 1.20018Z"
                  fill="currentColor"/>
          </svg>
        </button>
        <button class="btn-icon btn-icon---hover-danger" @click="cancelEdit">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.8001 10.8002C11.4628 10.1375 11.4628 9.06294 10.8001 8.40019L8.40003 6.00017L10.8 3.60019C11.4628 2.93745 11.4628 1.86293 10.8 1.20019C10.1373 0.537443 9.06275 0.537443 8.40001 1.20019L6.00003 3.60017L3.60004 1.20018C2.9373 0.537439 1.86278 0.537439 1.20004 1.20018C0.537294 1.86292 0.537294 2.93744 1.20004 3.60019L3.60002 6.00017L1.2 8.4002C0.537256 9.06294 0.537256 10.1375 1.2 10.8002C1.86274 11.4629 2.93726 11.4629 3.6 10.8002L6.00003 8.40018L8.40005 10.8002C9.06279 11.4629 10.1373 11.4629 10.8001 10.8002Z"
                  fill="currentColor"/>
          </svg>
        </button>
      </div>
    </template>
    <template v-else>
      {{ editName }}
      <button class="btn-icon btn-icon--link" @click="isEditing=!isEditing">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15.5631 16.9546H10.1234C9.81285 16.9546 9.56085 16.7026 9.56085 16.3921C9.56085 16.0816 9.81285 15.8296 10.1234 15.8296H15.5631C15.8736 15.8296 16.1256 16.0816 16.1256 16.3921C16.1256 16.7026 15.8736 16.9546 15.5631 16.9546Z"
                fill="currentColor"/>
          <mask id="mask0_421_2859" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="14"
                height="15">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50024 2.75H14.3857V16.9547H1.50024V2.75Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_421_2859)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.83295 4.26253L2.7717 13.0938C2.64345 13.2543 2.5962 13.4613 2.64345 13.66L3.1542 15.8238L5.43345 15.7953C5.6502 15.793 5.85045 15.6963 5.9832 15.5313C8.39595 12.5125 12.9957 6.75703 13.1262 6.58828C13.2492 6.38878 13.2972 6.10678 13.2327 5.83528C13.1667 5.55703 12.9934 5.32078 12.7437 5.17003C12.6904 5.13328 11.4267 4.15228 11.3877 4.12153C10.9122 3.74053 10.2184 3.80653 9.83295 4.26253ZM2.7102 16.9547C2.44995 16.9547 2.22345 16.7762 2.1627 16.522L1.54845 13.9187C1.4217 13.3795 1.5477 12.823 1.89345 12.391L8.95845 3.55448C8.96145 3.55148 8.9637 3.54773 8.9667 3.54473C9.74145 2.61848 11.1424 2.48198 12.0875 3.24023C12.1249 3.26948 13.3797 4.24448 13.3797 4.24448C13.8357 4.51598 14.1919 5.00123 14.327 5.57573C14.4612 6.14423 14.3637 6.73073 14.051 7.22648C14.0277 7.26323 14.0075 7.29473 6.86145 16.2347C6.5172 16.6637 6.0012 16.9135 5.44695 16.9202L2.7177 16.9547H2.7102Z"
                  fill="currentColor"/>
          </g>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.1676 9.26353C12.0476 9.26353 11.9276 9.22528 11.8248 9.14728L7.73581 6.00628C7.48981 5.81728 7.44331 5.46478 7.63231 5.21728C7.82206 4.97128 8.17456 4.92553 8.42131 5.11453L12.5111 8.25478C12.7571 8.44378 12.8036 8.79703 12.6138 9.04378C12.5036 9.18778 12.3363 9.26353 12.1676 9.26353Z"
                fill="currentColor"/>
        </svg>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "NameControl",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isEditing: false,
      editName: ''
    }
  },
  methods: {
    save() {
      this.isEditing = false;
      // todo logic
    },
    cancelEdit() {
      this.editName = this.name
      this.isEditing = false;
      // todo logic
    }
  },
  mounted() {
    this.editName = this.name
  }
}
</script>

<style lang="scss" scoped>
.name-control {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #090E34;
  &__actions{
    display: flex;
    gap: 5px;
  }
}

.input {
  width: 70px;
  height: 24px;
  padding: 2px;
  background: #FFFFFF;
  border: 1px solid #959CB1;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #090E34;

  &:focus{
    border-color: #4A6CF7;
    outline: none;
  }
  @media(max-width: 759px){
    width: 150px;
  }
  @media(max-width: 999px){
    width: 50px;
  }
  @media(min-width: 1859px){
    width: 150px;
  }
}
</style>