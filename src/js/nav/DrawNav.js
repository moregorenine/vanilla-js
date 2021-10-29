const removeClassNameFromTargets = function(targets, className) {
  targets.forEach(target => {
    target.classList.remove('active')
  })
}

const setClickEvent = function(ul) {
  ul.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', event => {
      const targets = document.querySelector('.nav.nav-tabs').querySelectorAll('a')
      removeClassNameFromTargets(targets, 'active')
      a.classList.add('active')
    })
  })
}

const drawNav = function(container, defaultActiveId) {
  const ul = document.createElement('ul')
  ul.className = 'nav nav-tabs'

  const li_about = document.createElement('li')
  li_about.className = 'nav-item'
  const a_about = document.createElement('a')
  a_about.id = 'a_about'
  a_about.className = 'nav-link'
  a_about.href = '#'
  a_about.innerText = 'about'
  li_about.append(a_about)

  const li_datatables = document.createElement('li')
  li_datatables.className = 'nav-item'
  const a_datatables = document.createElement('a')
  a_datatables.id = 'a_datatables'
  a_datatables.className = 'nav-link'
  a_datatables.href = '#'
  a_datatables.innerText = 'DataTables'
  li_datatables.append(a_datatables)

  ul.append(li_about, li_datatables)

  container.append(ul)

  setClickEvent(ul)
  document.querySelector('#'+defaultActiveId).classList.add('active')
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
