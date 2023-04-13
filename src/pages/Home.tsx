type StateType  = ('Study' | 'Relax' )


import * as C from './HomeStyles'
import {useState , useEffect, } from 'react';
export const Home = () =>{

    const [currentTime, setCurrentTime] =  useState('')
    const [userTime, setUserTime] = useState(500)
    const [time, setTime] = useState<number>(userTime);
    const [intervalI , setIntervalI] = useState<any>(null)
    const [stage, setStage] = useState<StateType>('Study');
    const [cicle, setCicle] = useState(1)
    
    
    const FormatClock = (time:number)=>{
        let minutes = Math.floor(time/60)
        let resSeconds  =time % 60
        setCurrentTime(`${minutes.toString().padStart(2,'0')}:${resSeconds.toString().padStart(2,'0')}`)
    }
   
  
    useEffect(()=>{
        FormatClock(time);
        if(time <= 0 ){
             stop()
             changeStage()
             if(cicle === 9 ){
                restart()
             }
             
        }


    },[time])

    useEffect(()=>{
        setCicle(cicle+1)
        
    },[stage])

    const start = ()=>{
        if(intervalI == null){
           
            const interval = setInterval(()=>{
                setTime(timer => timer-1);
            },10)
            setIntervalI(interval)
            return ()=>{clearInterval(interval);}
        }
        return
         
    }
    const stop = () =>{
        clearInterval(intervalI)
        setIntervalI(null)
    }
    const restart = () =>{
        clearInterval(intervalI);
        setIntervalI(null);
        setTime(userTime)
        setCicle(1)
    }

    const changeStage = () =>{
       
        if(cicle < 9){
            if(stage === "Study"){
                
                setStage('Relax')
                
                if(cicle === 8){
                    
                   setTime(Math.round(userTime/3))
                   
                }else{
                    setTime(userTime / 5)
                }
                
             }   
             else if(stage ==="Relax"){
                setStage('Study')
                setTime(userTime)

             }
        }
        
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