import * as C from './HomeStyles'
import {useState , useEffect, } from 'react';
export const Home = () =>{

    const [currentTime, setCurrentTime] =  useState('')
    const [time, setTime] = useState(1499);
    const [intervalI , setIntervalI] = useState<any>(null)
    
    
    const FormatClock = (time:number)=>{
        let minutes = Math.floor(time/60)
        let resSeconds  =time % 60
        setCurrentTime(`${minutes.toString().padStart(2,'0')}:${resSeconds.toString().padStart(2,'0')}`)
    }
   
    useEffect(()=>{
       
    },[])
    useEffect(()=>{
        FormatClock(time);
    },[time])

    const start = ()=>{
         const interval = setInterval(()=>{
            setTime(timer => timer-1)
        },1000)
        setIntervalI(interval)
        return ()=>{clearInterval(interval);}
    }
    const stop = () =>{
        clearInterval(intervalI)
        setIntervalI(null)
    }
    const restart = () =>{
        clearInterval(intervalI);
        setIntervalI(null);
        setTime(1499)
    }

    return(
        <C.Container>
            <C.StageControl>
                <div className="stage"></div>
                <div className="stage"></div>
                <div className="stage"></div>
                <div className="stage"></div>
            </C.StageControl>
            <C.PomodoroContainer>
                <div className="Timer">{currentTime}</div>
            </C.PomodoroContainer>
            <C.Controls>
                <button onClick={()=>start()}>Start</button>
                <button onClick={()=>stop()}>Stop</button>
                <button onClick={()=>restart()}>Restart</button>
                </C.Controls>


        </C.Container> 
    )
}