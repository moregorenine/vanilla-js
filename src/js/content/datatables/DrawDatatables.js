import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'
import 'datatables.net-dt/js/dataTables.dataTables.min'
import { Persons } from '../about/Persons'

const DrawDatatables = function(container) {

  const h1 = document.createElement('h1')
  h1.innerText = 'Hello, DataTables!'
  const h5 = document.createElement('h5')
  h5.innerText = 'Zero configuration'
  h5.className = 'mt-3'
  const table = document.createElement('table')
  table.id = 'datatables'
  table.className = 'display mt-5'
  // table.style = 'width:100%'

  container.append(h1, h5, table)

  $('#datatables').DataTable({
    data: Persons,
    columns: [
      { title: "Name", data: 'name' },
      { title: "Phone", data: 'phone' },
      { title: 'email', data: 'email' },
      { title: 'address', data: 'address' },
      { title: 'country', data: 'country' },
      { title: 'region', data: 'region' },
      { title: 'postalZip', data: 'postalZip' },
      { title: 'text', data: 'text' },
      { title: 'currency', data: 'currency' },
      { title: 'alphanumeric', data: 'alphanumeric' }
    ]
  })

}

export default DrawDatatables