<template>
  <button
    :type="type"
    :class="classes"
    @click="$emit('click')"
    :disabled="isLoading || (!isLoading && isDisabled)"
  > 
    <template v-if="isLoading">
      <b-spinner small></b-spinner>
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
    variant: {
      type: String,
      default: 'primary'
    },
    isBlocked: {
      type: Boolean,
      default: false
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
      classes: 'q-btn',
      styles: '',
    }
  },
  watch: {
    variant: {
      handler(newValue) {
        if (newValue) {
          const variants = [
            {
              name: 'primary'
            },
            {
              name: 'secondary'
            },
            {
              name: 'success'
            },
            {
              name: 'danger'
            },
            {
              name: 'warning'
            },
            {
              name: 'info'
            },
            {
              name: 'light'
            },
            {
              name: 'dark'
            },
          ]
          const classNameArray = this.classes.split(" ")
          variants.forEach((variant) => {
            const result = classNameArray.find((item) => item !== `q-btn--${variant.name}`)
            this.classes = `${result} q-btn--${newValue}`
          })
        }
      },
      immediate: true
    },
    isBlocked: {
      handler(newValue) {
        if (newValue) {
          this.classes = `${this.classes} q-btn--blocked`
        } else {
          this.onButtonBlockedRemove()
        }
      },
      immediate: true
    },
    isLoading: {
      handler(newValue) {
        if (newValue) {
          this.classes = `${this.classes} q-btn--disabled`
        } else {
          this.onButtonDisabledRemove()
        }
      },
      immediate: true
    },
    isDisabled: {
      handler(newValue) {
        if (newValue) {
          this.classes = `${this.classes} q-btn--disabled`
        } else {
          this.onButtonDisabledRemove()
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
    onButtonDisabledRemove() {
      const classNameArray = this.classes.split(" ")
      const isButtonDisabled = classNameArray.find((item) => item === 'q-btn--disabled')
      if (isButtonDisabled) {
        const result = classNameArray.filter((item) => item !== 'q-btn--disabled')
        const classNameString = result.join(" ");
        this.classes = classNameString
      }
    },
    onButtonBlockedRemove() {
      const classNameArray = this.classes.split(" ")
      const isButtonBlocked = classNameArray.find((item) => item === 'q-btn--blocked')
      if (isButtonBlocked) {
        const result = classNameArray.filter((item) => item !== 'q-btn--blocked')
        const classNameString = result.join(" ");
        this.classes = classNameString
      }
    }
  }
}
</script>
