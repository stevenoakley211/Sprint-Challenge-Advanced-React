import styled from 'styled-components'

export const CardContainer = styled.div `
    // display:flex;
    // flex-wrap: wrap;
`
export const Card = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 20px;
    padding:20px;
    text-align: center;
`
export const Switch = styled.label `
position: relative;
display: inline-block;
width: 60px;
height: 34px;
`
export const Slider = styled.span `
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;

&:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
`
export const SwitchInput = styled.input `
opacity: 0;
width: 0;
height: 0;
&:checked + ${Slider} {
    background-color: #2196F3;
}
&:checked + ${Slider}:before {
    
    -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
`

