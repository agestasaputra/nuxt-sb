<template>
  <button
    :type="type"
    :class="dynamicClassName"
    :style="styleName"
    @click="$emit('click')"
    :disabled="isLoading || (!isLoading && isDisabled)"
  > 
    <template v-if="isLoading">
      <fa :icon="['fas', 'spinner']" spin />
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>
<script>
export default {
  name: 'QButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    className: {
      type: String,
      default: 'q-btn'
    },
    styleName: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      dynamicClassName: '',
    }
  },
  watch: {
    className: {
      handler(newValue) {
        if (newValue) {
          this.dynamicClassName = newValue
        }
      },
      immediate: true
    },
    variant: {
      handler(newValue) {
        if (newValue) {
          this.dynamicClassName = `${this.dynamicClassName} q-btn--${newValue}`
        }
      },
      immediate: true
    },
    isLoading: {
      handler(newValue) {
        if (newValue) {
          this.dynamicClassName = `${this.dynamicClassName} q-btn--disabled`
        } else {
          this.onButtonDisableRemove()
        }
      },
      immediate: true
    },
    isDisabled: {
      handler(newValue) {
        if (newValue) {
          this.dynamicClassName = `${this.dynamicClassName} q-btn--disabled`
        } else {
          this.onButtonDisableRemove()
        }
      },
      immediate: true
    },
  },
  methods: {
    getClassName(value) {
      let result = ''
      if (value) {
        result = value
      } else {
        result = this.className
      }
      return result;
    },
    onButtonDisableRemove() {
      const classNameArray = this.dynamicClassName.split(" ")
      const isButtonDisabled = classNameArray.find((item) => item === 'q-btn--disabled')
      if (isButtonDisabled) {
        const result = classNameArray.filter((item) => item !== 'q-btn--disabled')
        const classNameString = result.join(" ");
        this.dynamicClassName = classNameString
      }
    }
  }
}
</script>