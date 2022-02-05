import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
  <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Users</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
	  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="btn btn-outline-light mx-2" aria-current="page" exact to="/">Home</NavLink>
              </li>
            </ul>
          </div>
          <Link className='btn btn-outline-light' to="/users/add">Add User</Link>
        </div>
      </nav>
  </div>
    )
}

export default Navbar
