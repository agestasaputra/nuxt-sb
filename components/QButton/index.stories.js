import QButton from './index.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'QButton',
  component: QButton,
  parameters: {
    docs: {
      description: {
        component: 'QButton is Custom button for Qontak UI Component',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
  },
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  template: `<QButton v-bind="$props" @click="onButtonClick" > Default </QButton>`,
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
