import React from 'react'
import ReactTooltip from 'react-tooltip'
import {Link} from 'react-router-dom'

import '../App.css'

const logo = './img/logo.png'

function Navbar() {
  return (
    <>
      <nav className="container nav-container">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo valing-wrapper z-depth-2">
            <img className="reponsive-img left" src={logo} alt="Logo de blog" />
          </Link>
          <ul className="right valing-wrapper">
            <li>
              <Link to="about">Sobre mi</Link>
            </li>
            <li>
              <Link to="!#">Contacto</Link>
            </li>
            <li>
              <ReactTooltip />
              <Link data-tip="Aun estoy en produccion!" className="btn" to="!#">
                Registro
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    )
  }

export default Navbar
