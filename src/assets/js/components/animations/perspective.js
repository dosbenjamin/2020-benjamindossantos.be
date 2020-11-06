// ?? Keep or delete ?

export default ({ clientX, clientY }, { width, height }, $wrapper) => {
  const AMOUNT = 0.1
  const calcX = number => number * AMOUNT
  const calcY = number => number * -AMOUNT
  const values = {
    x: calcX((clientX - width / 2) / width),
    y: calcY((clientY - height / 2) / height)
  }
  $wrapper.style.transform = `translateZ(0) perspective(1000px) rotateY(${values.x}deg) rotateX(${values.y}deg)`
}
