import styled, { css, keyframes } from "styled-components";

const borderRadius = 50;


export const ButtonGlobal = styled.button`
  cursor: pointer;
  //font-family: fantasy;
  width: 80%;
  background: ${(props) => (props.disabled === false ? "#EC5056" : "#9F9F9F")};
  border-radius: ${props => props.borderRadius ? props.borderRadius : borderRadius}px;
  padding: 7px;
  border-style: none;
  color: white;
  grid-area:   ${props => props.area};
  
`;

//-----Login-------------Login---------

export const ContainerLog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${window.screen.availHeight}px;
  position: relative;

`;
export const LoadingDiv = styled.div`
  position: absolute;
  width: 100%;
  height: ${window.screen.availHeight}px;
  background: #ec5056;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${(props) => props.disp === "true" && "display:none;"}
  z-index: 2;
`;

export const CenterLog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 768px;
  justify-content: space-between;
  height: ${props => props.height * 0.8}px;
  
`;

export const InputLog = styled.input`
  grid-area:   ${props => props.area};
  border-style: none;
  border-bottom: solid;
  border-width: 1px;
  border-color: gray;
  width: 80%;
  background: transparent;
  outline: none;
`;
const FadeInAnimation = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
  `;

const fade = css`
  animation-name: ${FadeInAnimation};
  animation-duration: 3s;
`;
export const LogoDiv = styled.div`
grid-area:   ${props => props.area};
  width: 100%;
  ${(props) => props.fadein === "true" && fade}
  
  height: auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #EC5056;
  position: relative;
  
`;

export const LogoImg = styled.img`
  width: 100%;
  ${props => props.pad && `padding-top: ${window.screen.availHeight * .1}px;`}
  
`;

export const ErrorLog = styled.div`
  border-style: solid;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${window.screen.availHeight}px;
  background: black;
  opacity: 0.3;
  ${(props) => props.display === "false" && `display: none;`}
  z-index: 2;
  
`;

export const ErrorMesage = styled.div`
  position: absolute;
  //border-style: solid;
  width: 85%;
  max-width: 400px;
  height: 20%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: white;
  z-index: 3;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: ${borderRadius - 25}px;
  ${(props) => props.display === "false" && `display: none;`}
`;

export const LogParagraph = styled.p`
  text-align: center;
  cursor: ${props => props.cursor === "true" && "pointer"};
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  color: ${(props) => props.color};
  border-color: gray;
  ${(props) => props.border && `border-top-style: solid;`}
  border-width: 1px;
`;
export const SVG = styled.svg`
  width: 100%;
  
  ${props => props.position &&
    `position: absolute;
    bottom: -1px;`}
  z-index: 0;
`;

export const Path = styled.path`
  fill: white;
`;

export const LoginForm = styled.div`
max-height: 332px;
`

//-----navBar-------------navBar---------

export const NavImgDiv = styled.div`
height: 50px;
`;

export const NavImg = styled.img`
height: 100%;
`;

export const IconDiv = styled.div`
margin-left: 2%;
width: 100%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const LateralMenuBack = styled.div`
background: black;
overflow:hidden ;
opacity: .4;
width: ${props => props.display === "true" ? "100" : "0"}%;
height: ${window.screen.availHeight}px;
position: fixed;
top: 0;
left: 0;
z-index: 2;
`;

export const LateralMenu = styled.div`
user-select: none;
width: ${props => props.display === "true" ? "60" : "0"}%;
max-width: 400px;
height: ${window.screen.availHeight}px;
top: 0;
left: 0;
position: fixed;
z-index: 3;
background: #EC5056;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
overflow:hidden ;
`;



//-----cardBenevits-------------cardBenevits---------

export const BenevitsContainer = styled.div`

display: flex;
//justify-content: space-evenly;

overflow-x: scroll;
padding-bottom: 25px;

`;

export const CardContainer = styled.div`

height: ${window.screen.availHeight * .32}px;
width: ${window.screen.availHeight * .32}px;
min-width: ${window.screen.availHeight * .32}px;
margin-right: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
border-radius: ${borderRadius - 35}px;
background: white;

`;

export const LockedDiv = styled.div`
width: 75%;
height: 75%;
`;

export const LockedImg = styled.img`
width: 100%;
`;

export const UnlockedDiv = styled.div`
width: 30%;
height: 30%;
display: flex;
flex-direction: column;
align-items: center;
`;
export const UnlockedImg = styled.img`
height: 100%;

`;

export const UnlockParagraph = styled.p`
${props => props.cursor ==="true" && "cursor:pointer;"} 
width: 90%;
color: ${props => props.color};
text-align: center;
${props => props.margin === "true" && "margin-bottom: 120px;"}
`;

