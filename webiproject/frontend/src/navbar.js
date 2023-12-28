import React from 'react'
// import ReactDOM from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = () => {
  return (
<>
<nav class="navbar  navbar-expand-lg bg-primary">
  <div class="container text-light  ">
  <a class="nav-link active" aria-current="page" href="flipkart">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="flipkartnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-light">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="flipkart">SHOP</a>
        </li>
        <li class="nav-item">
        <NavDropdown title="BLOG" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Left Sidebar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Right Sidebar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">No Sidebar</NavDropdown.Item>
      </NavDropdown>
      </li>

      <li class="nav-item">
        <NavDropdown title="PAGES" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Service</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">FAQs Pages</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Gallery</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Page 404</NavDropdown.Item>
      </NavDropdown></li>


       
      
      
   

      </ul>
     
    </div>
  </div>
</nav>  </>)
}
