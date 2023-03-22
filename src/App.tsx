import { FC, ReactNode, useState } from 'react'
import Card from './components/Card';
import Header from './components/Header';
import './App.scss'

import data from './stays.json'

function App() {

  const stays = data;

  
  return (
    <div className="App">
      <Header/>
      <div  className="mainContent">
        <div className='mainContent__header'>
          <h1 className='mainContent__header__title'>Stays in Finland</h1>
          <span className='mainContent__header__countStay'>{`${stays.length}+ stays`}</span>
        </div>
        <div className='mainContent__containerCards'>
          {stays.map((stayData, key):ReactNode=>{
           return <Card {...stayData} key={key}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
