import DrawAbout from './about/DrawAbout'
import DrawDatatables from './datatables/DrawDatatables'

const drawContent = function(container, clickedId) {
  console.log(container)
  console.log(clickedId)

  switch (clickedId) {
    case 'a_about':
      // eslint-disable-next-line no-param-reassign
      container.innerHTML = ''
      DrawAbout(container)
      break
    case 'a_datatables':
      // eslint-disable-next-line no-param-reassign
      container.innerHTML = ''
      DrawDatatables(container)
      break
    default:
      break
  }


}

export default drawContent