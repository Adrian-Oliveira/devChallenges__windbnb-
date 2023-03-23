import { FC, ReactNode, useState } from 'react'
import Card from './components/Card';
import Header from './components/Header';
import './App.scss'

import data from './stays.json'


type StayType =  {
  city:string, 
  country:string,
  superHost:boolean,
  title:string ,
  rating: number,
  maxGuests: number,
  type: string,
  beds: number|null,
  photo:string
}


function App() {

  const [stays, setStays] = useState<StayType[]>(data);

  
  return (
    <div className="App">
      <Header stays={data} setStays={setStays}  />
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
