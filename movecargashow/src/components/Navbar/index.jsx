import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    
    <Container>
      <figure className='logo'>
        <Link className='menu-item' to='/'>
          <img src={logo} alt="logo movecargashow" />
        </Link>
      </figure>
      <nav className="menu">
        <Link className='menu-item' to='/'>Home</Link>
        <Link className='menu-item' to='guindastes'>Guindastes</Link>
        <Link className='menu-item' to='guindautos'>Guindautos | Munck</Link>
        <Link className='menu-item' to='acessorios'>Acessórios</Link>
        <Link className='menu-item' to='contato'>Contato</Link>
      </nav>
      
          
    </Container>
        
     
  )
}
