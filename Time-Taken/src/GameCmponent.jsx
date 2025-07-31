import React, { useEffect, useState } from "react";

const GameCmponent = ({updateTime}) => {

    const [timer, setTimer] = useState(0);

    const update= (timer)=>{
        updateTime(timer);
    }
  
        useEffect(() => {
            const interval = setInterval(() => {
            setTimer((prev) => {
                let newTime = prev +1;
                update(newTime)
                return newTime;
            })
            },1000)

            return(() => {
                clearInterval(interval)
            })

        },[])
 
  return (
    <div>
      <h1 >Game Component</h1>
      <p>Timer: {timer}</p>
    </div>
  );
};

export default GameCmponent;
