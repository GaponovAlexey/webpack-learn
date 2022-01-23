console.log('Post to string')

function createAnalitics() {
  let counter = 0
  let isDestroy = false
  const listener = () => counter++
  document.addEventListener('click', listener)
  return {
    destroy() {
      document.removeEventListener('click', listener)
      isDestroy = true
    },
    getClicks() {
      isDestroy ?  'destroy ' :  counter
    },
  }
}
window.analytics = createAnalitics()
