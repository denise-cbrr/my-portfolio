import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/hero/hero'
import About from './components/about/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}

export default App
