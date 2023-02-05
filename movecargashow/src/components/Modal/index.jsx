import React from 'react'
import { Container } from './styled'
import { AiFillCloseSquare } from "react-icons/ai";

export default function Modal({ isOpen, setIsOpen, children }) {
   if (isOpen) {
      return (
         <Container>
            <div className='modal'>
               <div className="close-bt" onClick={setIsOpen}>
                  <AiFillCloseSquare size={25}/>
               </div>
               {children}
            </div>
         </Container>
     
  )
   } else {
      return null
   }
   
}
