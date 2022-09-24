// A mode that does nothing
defineMode("Example Mode", grid => {
  return {
    dscription: "This is just an example",
    preload() { },
    init() { },
    onKey(key) { },
    update(x, y, index) { },
    draw() {},
  }
})
