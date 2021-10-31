const DrawDatatables = function(container) {

  const h1 = document.createElement('h1')
  h1.innerText = 'Hello, DataTables!'
  const h5 = document.createElement('h5')
  h5.innerText = 'Zero configuration'

  container.append(h1, h5)

}

export default DrawDatatables