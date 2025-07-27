import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Imagecomponent from './Components/Imagecomponent' 
import Bio from './Components/Bio'
import Price from './Components/Price'
import './App.css'

function App() {

  return (
    <div id='profilecard'>
    <div class="header" id="header">
      <h1>Patek  watch</h1>
    </div>
    <Imagecomponent/>
    <Bio/>
    <Price/>
    </div>
  )
}

export default App
