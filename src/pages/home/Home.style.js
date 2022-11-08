import styled from 'styled-components';


const HomeDiv = styled.div`
  width: 500px;
  line-height: 4.5rem;
  margin: 5rem auto;
  background-color:rgba(26, 126, 121, 1) ;
  border-radius: 10px;
  box-shadow:  3px 3px 10px red;
  font-family: 'Lobster Two', cursive;
  padding: 2rem;

`;
export const HomeLabel=styled.label`
color:#FF4858 ;
font-size: 3rem;
font-weight: 900;



`
export const Homeİnput=styled.input`
padding: 0 2rem;
border-radius: 10px;
color: black;
font-size: 2rem;




`
export const HomeSelect=styled.select`
padding: 2rem;
border-radius: 10px;
font-size: 1.5rem;



`
export const HomeOption=styled.option`
color: red;



`
export const HomeButton=styled.button`
padding: 0 1rem ;
font-size: 1.5rem;
margin: 2rem;
background-color:#00CCC0 ;
border: none;
border-radius: 10px;
box-shadow: 3px 3px 10px red ;
cursor: pointer;
&:hover{
    background-color:#747F7F ;
}



`


export default HomeDiv;
