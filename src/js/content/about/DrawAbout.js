const DrawAbout = function(container) {

  const h1 = document.createElement('h1')
  h1.innerText = 'Hello, vanilla js development!'
  const p = document.createElement('p')
  p.innerText = 'vanilla js & webpack 개발환경'

  container.append(h1, p)

}

export default DrawAbout