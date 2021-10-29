const drawNav = function(container) {
  const ul = document.createElement('ul')
  ul.className = 'nav nav-tabs'

  const li_about = document.createElement('li')
  li_about.className = 'nav-item'
  const a_about = document.createElement('a')
  a_about.className = 'nav-link active'
  a_about.href = '#'
  a_about.innerText = 'about'
  li_about.append(a_about)

  const li_datatables = document.createElement('li')
  li_datatables.className = 'nav-item'
  const a_datatables = document.createElement('a')
  a_datatables.className = 'nav-link'
  a_datatables.href = '#'
  a_datatables.innerText = 'datatables'
  li_datatables.append(a_datatables)

  // const li_handsontable = document.createElement('li')
  // li_handsontable.className = 'nav-item'
  // const a_handsontable = document.createElement('a')
  // a_handsontable.className = 'nav-link'
  // a_handsontable.href = '#'
  // a_handsontable.innerText = 'handsontable'
  // li_handsontable.append(a_handsontable)

  ul.append(li_about, li_datatables)

  container.append(ul)
}

export default drawNav


// <ul className="nav nav-tabs">
//   <li className="nav-item">
//     <a className="nav-link active" aria-current="page" href="#">Active</a>
//   </li>
//   <li className="nav-item dropdown">
//     <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
//        aria-expanded="false">Dropdown</a>
//     <ul className="dropdown-menu">
//       <li><a className="dropdown-item" href="#">Action</a></li>
//       <li><a className="dropdown-item" href="#">Another action</a></li>
//       <li><a className="dropdown-item" href="#">Something else here</a></li>
//       <li>
//         <hr className="dropdown-divider">
//       </li>
//       <li><a className="dropdown-item" href="#">Separated link</a></li>
//     </ul>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="#">Link</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link disabled">Disabled</a>
//   </li>
// </ul>
