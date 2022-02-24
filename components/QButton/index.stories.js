import QButton from './index.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'QButton',
  component: QButton
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  template: `<QButton v-bind="$props" @click="onButtonClick" > Test </QButton>`,
  methods: { 
    onButtonClick: action('onclick') 
  }
});

export const Default = Template.bind({})
Default.args = {
  type: "button",
  className: "q-btn",
  styleName: "",
  variant: "primary",
  isBlocked: false,
  isLoading: false,
  isDisabled: false,
}
