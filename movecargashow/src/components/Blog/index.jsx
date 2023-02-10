import React from 'react'
import { Container } from './styled'
import img from '../../assets/icone.png'

const title = "Titulo do Post Lorem ipsum dolor sit amet"
const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem aliquam ad ipsa nesciunt numquam quibusdam, doloremque magnam inventore repellat necessitatibus et ipsam natus a omnis possimus quisquam impedit incidunt?"


export default function Blog() {
  return (
     <Container>
        <img src={img} alt="foto" />
        <h3> {title} </h3>
        <p className="date">7 de fevereiro de 2023</p>
        <p className='text'>{texto}</p>
        <p className="read-more">
           <a href="/">Saiba mais</a>
        </p>
     </Container>
  )
}
