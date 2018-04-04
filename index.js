function verify () {
  if (window.ipfs) return true

  var a = document.createElement('a')
  a.href = 'https://github.com/ipfs-shipyard/ipfs-companion#install'
  a.target = '_blank'

  a.style.textDecoration = 'none'
  a.style.color = 'white'
  a.style.lineHeight = 1.4
  a.style.fontFamily = 'sans-serif'
  a.style.boxShadow = '0 1px 3px rgba(11, 58, 83, 0.3)'
  a.style.display = 'flex'
  a.style.boxSizing = 'border-box'
  a.style.alignItems = 'center'
  a.style.padding = '1rem'
  a.style.width = '100%'
  a.style.background = '#0b3a53'
  a.style.position = 'fixed'
  a.style.top = 0
  a.style.left = 0

  a.innerHTML = `<span>It seems that this application requires IPFS Companion to be installed. Click <span style='text-decoration: underline'>here</span> to install it!</span>`

  var close = document.createElement('span')
  close.style.border = '1px solid rgba(255, 255, 255, 0.3)'
  close.style.padding = '0.3rem'
  close.style.borderRadius = '2px'
  close.style.color = 'rgba(255, 255, 255, 0.8)'
  close.style.fontSize = '0.8rem'
  close.style.marginLeft = 'auto'
  close.innerText = 'Close'

  close.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    document.body.removeChild(a)
  })

  a.appendChild(close)
  document.body.appendChild(a)
  return false
}

if (typeof exports !== 'undefined') {
  module.exports = verify
} else {
  document.addEventListener('DOMContentLoaded', () => { verify() })
}
