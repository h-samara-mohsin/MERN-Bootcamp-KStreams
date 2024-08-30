import { useState } from 'react'
import './App.css'
import BasicForm from './components/BasicForm'
import AdvancedForm from './components/AdvancedForm'
import Login from './components/Login'

function App() {
  const [view, setView] = useState("basic")
  return (
    <>
      <div className="App">
        <nav className='navbar-container'>
          <h3
          onClick={()=> setView("basic")}
          style={{color: view === "basic" ? "#fff" : "" ,backgroundColor:view === "basic" ? "#4299e1;" : "" }}>
            Basic
          </h3>
          <h3
          onClick={()=> setView("advanced")}
          style={{color: view ==="advanced"? "fff" : "" , backgroundColor:view === "advanced" ? "#4299e1;" : "" }}
          >
            Advanced
          </h3>
        </nav>
        {view === "basic" ?  <BasicForm /> : <AdvancedForm />}
      </div>
      <Login />

    </>
  )
}

export default App
