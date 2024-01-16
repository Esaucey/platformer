const canvas = document.querySelector("canvas")
const canvasContext = canvas.getContext('2d')
console.log(canvasContext)

canvas.width = 1024
canvas.height = 576

const gravity = 0.3

class Player {
  constructor(position) {
    this.position = position
    this.velocity = {
      x: 0,
      y: 1,
    }
    this.height = 100
  }

  draw() {
    canvasContext.fillStyle = "red"
    canvasContext.fillRect(this.position.x, this.position.y, this.height, 100)
  }

  update() {
    this.draw()

    this.position.x += this.velocity.x

    this.position.y += this.velocity.y

    if (this.position.y + this.velocity.y + this.height < canvas.height) {
      this.velocity.y += gravity
    } else {
      this.velocity.y = 0
    }
  }
}

const player = new Player({x: 0, y: 0})
const player2 = new Player({x: 300, y: 0})

canvasContext.fillStyle = "green"
canvasContext.fillRect(0, 0, canvas.width, canvas.height,)

canvasContext.fillStyle = "red"
canvasContext.fillRect(200, 100, 100, 100)

const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  }
}

function animate() {
  window.requestAnimationFrame(animate)
  canvasContext.fillStyle = "green"
  canvasContext.fillRect(0, 0, canvas.width, canvas.height,)

  player.update()
  player2.update()

  player.velocity.x = 0

  if (keys.d.pressed) {
    player.velocity.x = 5
  } else if (keys.a.pressed) {
    player.velocity.x = -5
  }
}

animate()

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case 'd':
      keys.d.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 'w':
      player.velocity.y = -10
      break
  }
})

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }
})