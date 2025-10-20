import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='container-fluid d-flex border border-black bg-white'>
      <ul className='list-group-horizontal border border-0 d-inline-flex'>
        <li className='list-group-item'>
          <a href='#' className='link-underline-opacity-0 link-dark'>Início</a>
        </li>
        <li className='list-group-item'>
          <a href='#' className='link-underline-opacity-0 link-dark'>Personagem</a>
        </li>
        <li className='list-group-item dropdown'>
          <a href="#" className='link-underline-opacity-0 link-dark dropdown-toggle' onClick={toggleDropdown} role="button">
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
        <li className='list-group-item'>
          <a href='#' className='link-underline-opacity-0 link-dark'>Sobre</a>
        </li>
        <li className='list-group-item'>
          <a href='#' className='link-underline-opacity-0 link-dark'>Contato</a>
        </li>
      </ul>
    </nav>
  );
}