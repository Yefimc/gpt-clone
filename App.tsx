import sidebar from './components/sidebar'
import { main } from './components/main'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  return (
    <div className='main'>
      {sidebar()}
      {main()}
    </div>
  )
}

export default App