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
  isLoading: false,
  isDisabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  className: "q-btn",
  styleName: "",
  isLoading: false,
  isDisabled: false,
}

export const Success = Template.bind({})
Success.args = {
  variant: "success",
  className: "q-btn",
  styleName: "",
  isLoading: false,
  isDisabled: false,
}

export const Danger = Template.bind({})
Danger.args = {
  variant: "danger",
  className: "q-btn",
  styleName: "",
  isLoading: false,
  isDisabled: false,
}

export const Warning = Template.bind({})
Warning.args = {
  variant: "warning",
  className: "q-btn",
  styleName: "",
  isLoading: false,
  isDisabled: false,
}

export const Info = Template.bind({})
Info.args = {
  variant: "info",
  className: "q-btn",
  styleName: "",
  isLoading: false,
  isDisabled: false,
}

export const Light = Template.bind({})
Light.args = {
  variant: "light",
  className: "q-btn",
  styleName: "",
  isLoading: false,
  isDisabled: false,
}

export const Dark = Template.bind({})
Dark.args = {
  variant: "dark",
  className: "q-btn",
  styleName: "",
  isLoading: false,
  isDisabled: false,
}