import React,{useState, useEffect} from 'react'
import { Container } from './styled'
import api from '../../api'

export default function Guindastes() {

  const [models, setModels] = useState([])
	const [makers, setMakers] = useState([])
	const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [logo, setLogo] = useState('')
  

  async function getNames() {
		setLoading(true)
		setMakers(await api.getCraneNames())
		setLoading(false)
    
	}
  
  useEffect(() => {
   getNames()
  }, []);

  return (
    <Container>
      
      <main>
        <h1>Tabelas de Guindastes</h1>
        {loading &&
          <div className="loading"></div>
        }
        <div className="items">
            {!loading &&
            makers.map((elem) => (
              <div className="item">
                <img src={elem.logo} alt="" />
                <h3>{elem.name}</h3>
              </div> 
            ))
          }
        </div>
      </main>
      
    </Container>
  )
}
