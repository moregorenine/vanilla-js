const DrawAbout = function(container) {

  const h1 = document.createElement('h1')
  h1.innerText = 'Hello, vanilla js development!'
  const h5 = document.createElement('h5')
  h5.innerText = 'vanilla js & webpack 개발환경'

  container.append(h1, h5)

}

export default DrawAbout