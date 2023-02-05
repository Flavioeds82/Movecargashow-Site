import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import playstore from '../../assets/google-play-badge.png'


export default function Footer() {
  return (
     <Container>
        <div className="footer-left">
            <nav className="menu">
               <Link className='menu-item' to='termos'>Termos e Condições</Link>
               <Link className='menu-item' to='politicas'>Políticas de Privacidade</Link>
            </nav>
        </div>
        <div className="footer-center">
           <figure>
              <a href="https://www.facebook.com/movecargashow" target='_blank'> <GrFacebook size={25}/></a>
              <a href="https://www.instagram.com/movecargashow/" target='_blank'><GrInstagram size={25}/></a>
              <a href="https://www.tiktok.com/@movecargashow" target='_blank'><SiTiktok size={25}/></a>
              <a href="mailto:contato@movecargashow.com.br" target='_blank'><MdOutlineEmail size={30} /></a>
           </figure>
           Copyright © 2023 Movecargashow | Todos os diretos reservados
        </div>
        <div className="footer-right">
           <figure>
              <a href="https://play.google.com/store/apps/details?id=com.movecargashow" target='_blank'>
                 <img src={playstore} alt="google-play-badge" />
              </a>
           </figure>
        </div>
     </Container>
  )
}
