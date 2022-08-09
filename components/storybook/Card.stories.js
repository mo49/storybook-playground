export default {
  title: 'Card',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Card v-bind="$props" />`
})

export const Primary = Template.bind({})
Primary.args = {
  numbers: [1],
}

export const Secondary = Template.bind({})
Secondary.args = {
  numbers: [1,2,3],
}
