import React from 'react';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <a class="navbar-brand text-light" href="#">Home</a>
      <div class="collapse navbar-collapse" id="offcanvasNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item">
            <a class="nav-link text-light" href="#about"> About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#skills"> Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#services"> Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#achievement"> Achievement</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#projects"> Projects</a>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
