import './App.css'
import Navbar from './assets/Componentes/Navbar/Navbar'
import SectionOne from './assets/Componentes/SectionOne/SectionOne'

const [requisicao, setRequisicao] = useState()

function App() {
  async function req(){
   const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
   const json = await response.json()
   setRequisicao(json)
  }

  return (
    <div className="App">
      <SectionOne/>
      
    </div>
  )
}

export default App
