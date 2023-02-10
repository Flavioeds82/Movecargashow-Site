import React from 'react'
import { Container } from './styled'

export default function Contato() {

  
  return (
    <Container>
      
      <div className="container-form">
        <h2>Contato</h2>
        <form method="POST" action="https://formsubmit.co/movcargashow@gmail.com" enctype="multipart/form-data">
          <input type="text" name="name" placeholder="Digite seu nome" required/>
          <input type="email" name="email" placeholder="Digite seu email" required/>
          <textarea name="message" placeholder="Mensagem"></textarea>
          <input className='file' type="file" name="attachment" accept="image/png, image/jpeg, .pdf" />
          <p>*Tamanho maximo 5Mb</p>
          <input type="hidden" name="_next" value="http://localhost:5173/contato"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
   
    </Container>
  )
}
