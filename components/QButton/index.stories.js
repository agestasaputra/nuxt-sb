import QButton from './index.vue'

export default {
  title: 'QButton',
  component: QButton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  template: `<q-button @click="onClick" v-bind="$props" > Test </q-button>`,
});

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  className: "q-btn",
  styleName: "",
  variant: "primary",
  isLoading: false,
  isDisabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  className: "q-btn",
  styleName: "",
  variant: "primary",
  isLoading: false,
  isDisabled: false,
}