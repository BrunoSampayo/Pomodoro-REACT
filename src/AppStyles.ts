import styled from 'styled-components';


export const Header = styled.header`
padding: 8px;
width:100%;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #ccc;

.user{
    font-family: 'Lilita One', cursive;
    font-size: 22px;
    cursor: pointer;
}

h1{
    font-family: 'Pacifico', cursive;
    font-size: 34px;
    text-shadow: 1px 2px 3px #cec;
}
.menu{
width: 32px;
height: 32px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
cursor: pointer;
}
.menu .menuLine{
    width: 90%;
    height: 4px;
    background-color: #000;
    border-radius: 3px;
}
`;

export const Container = styled.div`
    width:90%;
    margin: auto;
`;

export const Footer = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
height: 50px;
background-color: #000;
color:#fff;
display: flex;
align-items: center;
justify-content: space-between;
font-family:'Lilita One', cursive ;
font-size: 20px;
padding: 12px;

@media  (max-width:1366px)  {
 
    height: 28px;
 }

.left{

}
.middle{

}
.right{

}
`;