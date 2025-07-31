import { useState } from 'react'
import "./App.css"
import GameCmponent from './GameCmponent'

function App() {

  const [start, setStart] = useState(false)
  const [time, setTimer] = useState(0)


const updateTime = (timer) => {
  setTimer(timer)
}



  return (
    <div>
      <button onClick={()=> setStart(true)}>Start</button>
      <button onClick={()=> setStart(false)}>Stop</button>
      <p>Time Taken : {time} </p>
      <p>Game Status : { start ? 'Running' : 'Stopped'}</p>
      {start && <GameCmponent updateTime={updateTime}/>}

    </div>
  )
}

export default App
