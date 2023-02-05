import React from 'react'
import { Container } from './styled'
import bg404 from '../../assets/bg-404.jpg'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <Container>

      <h4>Desculpe, houve um erro. Por favor, volte à página inicial e tente novamente.</h4>
      <div className="icon">
        <Link to='/'>
          <AiOutlineHome size={50} color='#000' />
        </Link>
      </div>
      <img src={bg404} alt="bg-404" />
    </Container>
  )
}
