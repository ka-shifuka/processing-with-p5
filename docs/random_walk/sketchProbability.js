let walker

function setup() {
  const canvas = createCanvas(300, 300)
  // additional canvas thing (optional)
  canvas.addClass("canvas-p5")
  canvas.parent("canvas-parent")
  canvas.elt.style = ""

  walker = new Walker()

  background(color("#ffffff"))
}

function draw() {
  walker.draw()
}

class Walker {
  constructor(x, y) {
    this.x = x || width / 2
    this.y = y || height / 2
  }

  draw() {
    const stepX = Math.floor(random(3)) - 1
    const stepY = Math.floor(random(3)) - 1

    // 50% probability to go right
    if (random() > 0.5) {
      this.x += 1
    } else {
      this.x += stepX
    }

    this.y += stepY

    stroke(0)
    point(this.x, this.y)
  }
}

