import * as C from './HomeStyles'
import {useState , useEffect} from 'react';
export const Home = () =>{

    const [currentTime, setCurrentTime] =  useState('')
    const [time, setTime] = useState(1499);
    
    
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

        return ()=>{clearInterval(interval);}
    }
    const stop = () =>{}
    const restar = () =>{}

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
                <button>Stop</button>
                <button>Restart</button>
                </C.Controls>


        </C.Container> 
    )
}