import { FC, ReactNode, useState } from 'react'
import Card from './components/Card';
import './App.scss'

import data from './stays.json'

function App() {

  const stays = data;

  
  return (
    <div className="App">
      <header>ola</header>
      <div  className="mainContent">
        <h1>Stays in Finland</h1>
        <div className='mainContent__containerCards'>
          {stays.map((stayData):ReactNode=>{
           return <Card {...stayData}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
