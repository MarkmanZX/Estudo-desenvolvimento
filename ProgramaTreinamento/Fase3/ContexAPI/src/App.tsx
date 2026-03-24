import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Card } from './components/Card'
import { AuthProvider } from './contexts/AuthContext'

function App() {


  return (
    <>
      <AuthProvider>
        <Card />
      </AuthProvider>
      
    </>
  )
}

export default App
