import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header' 
import ProfileCard from './components/Profilecard'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='flex items-center justify-center gap-20'>
        <ProfileCard />
        <Skills />
      </div>
     
      <Footer />
    </>
  )
}

export default App
