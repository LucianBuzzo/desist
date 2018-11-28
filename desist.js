(function () {
  var sizes = []
  var created = false
  var overlay = document.createElement('div')
  var createOverlay = function () {
    created = true
    overlay.style.position = 'fixed'
    overlay.style.top = 0
    overlay.style.left = 0
    overlay.style.right = 0
    overlay.style.bottom = 0
    overlay.style['z-index'] = 999999999999
    overlay.style['background-color'] = 'red'
    overlay.style.color = 'white'
    overlay.style['font-size'] = '148px'
    overlay.style['letter-spacing'] = '4px'
    overlay.style['padding-top'] = '200px'
    overlay.style['text-align'] = 'center'
    overlay.innerText = 'STOP IT!'
    document.body.appendChild(overlay)
  }
  var hideTimeout
  setInterval(function () {
    sizes.push(window.innerWidth)
    if (sizes.filter((v, i, a) => a.indexOf(v) === i).length > 10) {
      console.error('STOP IT')
      window.clearTimeout(hideTimeout)
      if (created) {
        overlay.style.display = 'block'
      } else {
        createOverlay()
      }

      hideTimeout = setTimeout(function () {
        overlay.style.display = 'none'
      }, 500)
    }
    sizes = sizes.slice(-30)
  }, 100)
}())
