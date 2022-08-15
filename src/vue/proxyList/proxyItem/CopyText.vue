<template>
  <a class="click-to-copy" @click.prevent="copy" ref="text">
    {{ copyText }}
  </a>
</template>

<script>
import {Tooltip} from 'bootstrap';

export default {
  name: "CopyText",
  props: {
    copyText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tooltip: null,
      isCopied: true
    }
  },
  methods: {
    copy() {
      this.tooltip.show();
      navigator.clipboard.writeText(this.copyText)
      setTimeout(() => {
        this.tooltip.hide();
      }, 400)
    }
  },
  mounted() {
    this.tooltip = new Tooltip(this.$refs.text, {
      html: true,
      title: '&check;',
      trigger:'manual'
    });
  }
}
</script>

<style lang="scss" scoped>
.click-to-copy {
  display: inline-flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #4A6CF7;
  cursor: pointer;

  &:hover {
    color: #090E34;
  }
}
</style>