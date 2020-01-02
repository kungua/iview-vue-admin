export default {
  functional: true,
  props: {
    name: String,
    renderFunc: Function
  },
  render: (h, ctx) => ctx.props.renderFunc(h, ctx.props.name)
}
