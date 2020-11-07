export default ($element, { height: windowHeight }) => {
  const SCALE_DIVIDER = 6

  const {
    top: elementTop,
    height: elementHeight
  } = $element.getBoundingClientRect()

  const center = (windowHeight / 2) - (elementTop + (elementHeight / 2))
  const value = ((center / windowHeight) / SCALE_DIVIDER) + 1

  $element.style.transform = `scale3d(${value}, ${value}, 1)`
}
