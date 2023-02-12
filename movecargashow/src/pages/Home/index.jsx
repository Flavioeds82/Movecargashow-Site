import React,{useState,useEffect} from 'react'
import { Container } from './styled'
import Blog from '../../components/Blog'
import GoogleAnalytics from '../../GoogleAnalytics'
import Modal from '../../components/Modal'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BannerNative} from '../../components/Banners'


export default function Home() {

   const [openModal, setOpenModal] = useState(true)
  

  return (
    <Container className='container'>
      <GoogleAnalytics />
     
        <Modal isOpen={openModal} setIsOpen={()=> setOpenModal(!openModal)}>
            <div className="top">
                <p>Seja bem-vindo ao <strong>Movecargashow</strong>, o local onde você encontrará <strong>Gráficos e Tabelas de Carga de Guindastes, Guindautos(Munck) e Acessórios</strong>. É <strong>importante</strong> destacar que todas as informações fornecidas sobre fabricantes de guindastes, guindautos e acessórios disponíveis em formato <strong>PDF</strong>, são apenas para fins de consulta. Não utilize nenhum guindaste, guindauto e acessórios com base nas informações aqui apresentadas. Antes de operar qualquer guindastes, guindauto e acessório, consulte o <strong>manual original de operação</strong> fornecido pelo <strong>fabricante.</strong></p>
            </div>
          </Modal>
     
      <div className="top-container">

           <div className="left">
              
           
          
        </div>


        <div className="center"></div>


           <div className="right">
              
             
          
        </div>
      </div>
        
      <main className="main">
        <h2>Notícias</h2>
        <Blog/>
      </main>

      <div className="ads">
           <BannerNative />
           
      </div>

       
      
    </Container>
  )
}
