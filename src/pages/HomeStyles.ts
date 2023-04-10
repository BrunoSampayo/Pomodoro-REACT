import styled from "styled-components";
import tomato from '../assets/tomato.svg';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

`;

export const StageControl = styled.div`

width: 100%;
display: flex;
justify-content: center;
gap: 28px;
margin: 15px 0;
@media  (max-width:1366px)  {
  margin: 5px 0;
}


.stage{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: rgba(0,0,0,.8);
}

`;

export const PomodoroContainer = styled.div`
width: 100%;

display: inherit;
justify-content: center;

height: 540px;

background-image: url(${tomato});
background-position: bottom ;
background-size: 600px;
background-repeat: no-repeat;

@media  (max-width:1366px)  {
    background-color: #ccc;
    height: 410px;
    overflow: hidden;
    background-size: 430px;
    
}



.Timer{
    font-family:'Lilita One', cursive ;
    margin: auto;
    color: #ffe;
    text-shadow: 3px 4px 5px #222;
    font-size: 102px;
}
`;

export const Controls = styled.div`
display: flex;
gap: 15px;

button{
    width: 100px;
    height: 50px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:28px;
    font-family:'Lilita One', cursive ;

}
button:hover{
    background-color: #C01707;
    color: #fff;
    border: 1px solid #ccc;
    scale: 1.1;
}

@media  (max-width:1366px)  {
 
button{
    width: 100px;
    height: 40px;
}
}
`