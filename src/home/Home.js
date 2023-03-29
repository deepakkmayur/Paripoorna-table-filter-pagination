import React, { useState } from 'react'
// import Screen1 from '../components/Screen11'
import Screen1 from '../components/Screen1'
import "./Home.css"
import {screen1Column,screen1Data,screen2Column,screen2Data} from "../components/Sample Data/Sample_Data"

const Home = () => {

   const [state,setState]=useState(true)
   const clickHandler=()=>setState((prev)=>!prev)
      
    const [screen,setScreen]=useState(false)
   const screenHandler=()=>setScreen((prev)=>!prev)

   console.log(state);
  
  return (
    <div className='home'>
      
      {state?<button className='viewScreen' onClick={clickHandler}>View Screen</button>: <div>
         <button className='backHomeButton' onClick={clickHandler}>back Home</button>
         {screen?<><button className='backButton' onClick={screenHandler}>Screen 1</button><p>"click on Table title name for sorting"</p></>:<button onClick={screenHandler} className="backButton">  Screen 2</button>}
         
         {screen? <>
           <Screen1 columns={screen2Column} data={screen2Data} screen={true} />
           </>:
            <>  
           <Screen1 columns={screen1Column} data={screen1Data} screen={false}/>
           </> }
    
      </div>
     
      }
      
    </div>
  )
}

export default Home