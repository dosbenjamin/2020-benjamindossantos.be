export default ($element, { height: windowHeight }) => {
  const {
    top: elementOffsetTop,
    height: elementHeight
  } = $element.getBoundingClientRect()
  const center = (windowHeight / 2) - (elementOffsetTop + (elementHeight / 2))
  const value = ((center / windowHeight) / 6) + 1
  $element.style.transform = `scale(${value})`
}
