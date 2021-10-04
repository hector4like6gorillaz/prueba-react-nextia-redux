import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  position: relative;
  ${(props) => props.over === "true" && "overflow:hidden"};
  
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 50px;
  background: #ec5056;
  color: #fff;
  grid-area: header; //área
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 90%;
  grid-area: contenido; //área
  margin-top: 50px;
  
`;

export const Sidebar = styled.aside`
  background: orange;
  min-height: 100px;
  grid-area: sidebar; //área

  /*flexbox para acomodar elementos*/

  display: flex;
  align-items: center;
  justify-content: center; //área
`;

export const Widget = styled.div`
  background: orchid;
  height: 100px;
  grid-area: ${(props) =>
    props.className === "widget-1" ? "widget-1" : "widget-2"}; //área

  /*flexbox para acomodar elementos*/

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  padding: 20px;
  background: maroon;
  color: #fff;
  grid-area: footer; //área
`;
