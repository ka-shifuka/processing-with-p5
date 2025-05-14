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
  walker.step()
  walker.draw()
}

class Walker {
  constructor(x, y) {
    this.x = x || width/2
    this.y = y || height/2
  }

  step() {
    const stepX = Math.floor(Math.random()*3)-1
    const stepY = Math.floor(Math.random()*3)-1

    this.x += stepX
    this.y += stepY
  }

  draw() {
    stroke(0)
    point(this.x, this.y)
  }
}
