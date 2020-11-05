const spanify = line => `<span class="js-spanified">
  <span class="js-animation" data-animation="translate">${line}</span>
</span>`

export default $element => {
  const lines = $element.textContent.split(' ')
  $element.innerHTML = lines.map(spanify).join('')
  return $element
}
