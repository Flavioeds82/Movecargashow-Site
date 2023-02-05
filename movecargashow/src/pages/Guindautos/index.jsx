import React,{useState, useEffect} from 'react'
import { Container } from './styled'
import api from '../../api'
import Modal from '../../components/Modal'

export default function Guindautos() {

  const [models, setModels] = useState([])
	const [makers, setMakers] = useState([])
  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState('')
  const [openModal, setOpenModal] = useState(false)
  

  async function getCranes(maker) {
		setLoading(true)
		const res = await api.getTruckCranes(maker)
		setModels(res)
		setLoading(false)
		setOpenModal(true)
	}
  

  async function getNames() {
		setLoading(true)
		setMakers(await api.getTruckCraneNames())
		setLoading(false)
    
	}
  
  useEffect(() => {
   getNames()
  }, []);

  return (
    <Container>
      
      <main>
        <h1>Tabelas de Guindautos / Muncks</h1>
        {loading &&
          <div className="loading"></div>
        }
        <div className="items">
            {!loading &&
            makers.map((maker) => (
              <div className="item" onClick={() => {
								getCranes(maker.name)
								setLogo(maker.logo)
							}}>
                <img src={maker.logo} alt="" />
                <h3>{maker.name}</h3>
                
              </div> 
            ))
          }
        </div>
        <Modal isOpen={openModal} setIsOpen={()=> setOpenModal(!openModal)}>
          <div className="container-modal">
            <img src={logo} alt="logo" />
            <div className="modal-item" >
              {models.map((model) => (
                <a href={model.url} target='_blank'>{model.model}</a>
              ))
              }
            </div>
          </div>
          
        </Modal>
      </main>
      
    </Container>
  )
}
