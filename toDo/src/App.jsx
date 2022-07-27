import './App.css'
import Navbar from './assets/Componentes/Navbar/Navbar'
import SectionOne from './assets/Componentes/SectionOne/SectionOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SectionOne/>
      
    </div>
  )
}

export default App
