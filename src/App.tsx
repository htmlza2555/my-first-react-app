import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Tle" />
    </div>
  )
}

export default App
