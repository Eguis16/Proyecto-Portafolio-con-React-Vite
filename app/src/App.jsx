import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WelcomeSection />
    </>
  )
}

export default App