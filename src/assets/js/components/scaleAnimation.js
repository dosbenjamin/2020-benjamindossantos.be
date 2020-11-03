export default ($item, { height: windowHeight }) => {
  const { top, height } = $item.getBoundingClientRect()
  const center = (windowHeight / 2) - (top + (height / 2))
  const value = ((center / windowHeight) / 6) + 1
  $item.style.transform = `scale(${value})`
}
