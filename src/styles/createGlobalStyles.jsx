import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//Estilos por defecto que trae React
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
//Estilos para Grid Area

/*Grid Area First Mobile*/

/*min 640px*/
.contenedor {
  

}
.Login_Form{
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-template-areas:    "email"
                          "pass"
                          "forget"
                          "login"
                          ;
  align-items: center;
  justify-items: center;
  
                          }

/*min 768px*/
@media screen and (min-width: 768px){
.contenedor{

}    
}

/*min 1024px*/
@media screen and (min-width: 1024px){
.contenedor{



}
.Login_Container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.Login_Center{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);
  grid-template-areas:    "Logo logform"
                          
                          
  ;
}
.Login_Form{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-template-areas:    "email"
                          "pass"
                          "forget"
                          "login"
                          ;
  height: 50%;
  align-items: center;
  justify-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background: #f2f2f2;
  
}
body { background-color: #EC5045;}
.input{
  font-size: 24px;
}
.Logo{
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}
}

/*min 1280px*/
@media screen and (min-width: 1280px){
.contenedor{


}


}

/*min 1536px*/

`;
