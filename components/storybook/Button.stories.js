export default {
  title: 'Button',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Button v-bind="$props" />`
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  text: 'PRIMARY BUTTON',
  showIcon: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  text: 'SECONDARY BUTTON',
  showIcon: true,
}
