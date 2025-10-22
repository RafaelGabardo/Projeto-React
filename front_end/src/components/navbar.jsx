import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary border border-black'>
      <div classNae="container-fluid">
        <div className='container'>
          <ul className='navbar-nav border border-0 d-inline-flex list-group-horizontal'>
            <li className='nav-item'>
              <a href='#' className='nav-link link-underline-opacity-0 link-dark'>Início</a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link link-underline-opacity-0 link-dark'>Personagem</a>
            </li>
            <li className='nav-item dropdown'>
              <a href="#" className='nav-link link-underline-opacity-0 link-dark dropdown-toggle' onClick={toggleDropdown} role="button">
                Geradores
              </a>
              {isDropdownOpen && (
                <ul className='dropdown-menu show' style={{ position: 'absolute' }}>
                  <li>
                    <a className='dropdown-item link-underline-opacity-0 link-dark' href="#">NPC'S</a>
                  </li>
                  <li>
                    <a className='dropdown-item link-underline-opacity-0 link-dark' href="#">Monstros</a>
                  </li>
                </ul>
              )}
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link link-underline-opacity-0 link-dark'>Sobre</a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link link-underline-opacity-0 link-dark'>Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}