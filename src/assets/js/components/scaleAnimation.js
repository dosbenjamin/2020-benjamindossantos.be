export default ($item, windowHeight) => {
  const { top, height } = $item.getBoundingClientRect()
  const center = (windowHeight / 2) - (top + (height / 2))
  const value = center / windowHeight
  $item.style.transform = `scale(${(value / 6) + 1})`
}
