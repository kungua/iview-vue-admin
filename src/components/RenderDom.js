export default {
  functional: true,
  props: {
    endVal: Number,
    renderFunc: Function
  },
  render: (h, ctx) => ctx.props.renderFunc(h, ctx.props.endVal)
}
