import React from 'react'

import './App.css'
import './index.css'
import Generator from '../src/components/generator/Generator'

import logo from './imgs/logo.png'

export default function App() {
  return (
    <div className='page-app'>
      <div className='content-wrapper'>
        <div className='applogo'>
          <img src={logo} alt='logo' />
          <h1 className='title'>Palpitei</h1>
        </div>
        <div className='generator-component'>
          <Generator />
        </div>
        <div className='footer'>
          <h3>Boa Sorte! :)</h3>
        </div>
      </div>
    </div>
  )
}
