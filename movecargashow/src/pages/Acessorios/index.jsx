import React,{useEffect,useState} from 'react'
import { Container } from './styled'
import api from '../../api'
import Modal from '../../components/Modal'
import GoogleAnalytics from '../../GoogleAnalytics'
import { BannerNative2} from '../../components/Banners'

export default function Acessorios() {

  const [toolsList, setToolsList] = useState([])
	const [tools, setTools] = useState([])
	const [openModal, setOpenModal] = useState(false)
	const [name, setName] = useState(false)
	const [loading, setLoading] = useState(true)

	async function getTools(model) {
		try {
			setLoading(true)
			setToolsList(await api.getTools(model))
			setLoading(false)
			setOpenModal(true)
		} catch (err) {
			console.log('Erro getTools ---> ', err)
			return
		}
	}

	async function getToolsNames() {
		try {
			setLoading(true)
			const toolsNameList = await api.getToolsNames()
			setTools(toolsNameList)
			setTimeout(() => {
				setLoading(false)
			}, 2000)
		} catch (err) {
			console.log('erro getNames --> ', err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getToolsNames()
  }, [])
  

  return (
    <Container>
      <GoogleAnalytics/>
      <main>
        <h1>Tabelas de Acessórios</h1>
        {loading &&
          <div className="loading"></div>
        }
        <div className="items">
            {!loading &&
            tools.map((maker) => (
              <div className="item" onClick={() => {
								getTools(maker.name)
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
            <div className="modal-item" >
              {toolsList.map((item) => (
                <div className="box">
                  <a href={item.url} target='_blank'>
                    <img src={item.logo} alt="" />
                    {item.name}
                  </a> 
                </div>
              ))
              }
            </div>
          </div>
          
        </Modal>
      </main>
      <BannerNative2/>
    </Container>
  )
}
