let randomCount = []
let total = 20

function setup() {
  const canvas = createCanvas(300, 300)
  // additional canvas thing (optional)
  canvas.addClass("canvas-p5")
  canvas.parent("canvas-parent")
  canvas.elt.style = ""

  for (let i = 0; i < total; i++) {
    randomCount[i] = 0
  }
}

function draw() {
  let index = Math.floor(random(randomCount.length))
  randomCount[index] += 1

  strokeWeight(0.4)
  let w = width / randomCount.length
  for (let i = 0; i < randomCount.length; i++) {
    rect(i * w, height - randomCount[i], w, randomCount[i])
    textSize(5)
    text(i, i * w + (w / 2), height - 10)
  }
}
