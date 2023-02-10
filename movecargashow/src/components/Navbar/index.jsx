import React,{useState} from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { ImMenu, ImCross } from "react-icons/im";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

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
      <div className="hamburguer">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen &&
            <ImCross color='#700308' size={25} />
          }
          {!isOpen &&
            <ImMenu color='#700308' size={35} />}
        </div>
        
        {isOpen &&
       
          
            <nav className="menu-mobile">
              <Link className='menu-item' to='/'>* Home</Link>
              <Link className='menu-item' to='guindastes'>* Guindastes</Link>
              <Link className='menu-item' to='guindautos'>* Guindautos | Munck</Link>
              <Link className='menu-item' to='acessorios'>* Acessórios</Link>
              <Link className='menu-item' to='contato'>* Contato</Link>
            </nav>
         
          
        }
        
      </div>
      
          
    </Container>
        
     
  )
}
