import React, { useEffect } from "react";

import { CenterLog, ContainerLog } from "../../styles/styledGlobalComponents";

import LoadingFade from "./components/LoadingFade";
import LogoNextia from "./components/LogoNextia";
import ErrorLogin from "./components/ErrorLog";
import FormLogin from "./components/FormLogin";
import {
  useAppDispatch,
  useAppSelector,
} from "../../App/components/ReduxHooks";
import {
  Disp,
  HandleDisplay,
  HandleHeight,
  Height,
} from "../../App/components/reduxSlices/FormSlice";

const logoNextia =
  "https://raw.githubusercontent.com/hector4like6gorillaz/crkb-hector/main/logo.png";

const Login = () => {
  const disp = useAppSelector(Disp);
  const height = useAppSelector(Height);

  const dispatch = useAppDispatch();
  //const pass = {
  //  user: { email: "prueba@nextia.mx", password: "PruebaNextia2021" },
  //};

  const display = () =>
    setTimeout(() => {
      dispatch(HandleDisplay(!disp)); //handleDisplay(!disp);
    }, 3000);
  useEffect(() => {
    display();
    return () => {
      display();
    };
  }, []);

  const reportWindowSize = () =>
    dispatch(HandleHeight(window.screen.availHeight)); // handleHeight(window.screen.availHeight);
  window.addEventListener("resize", reportWindowSize);

  return (
    <ContainerLog height={height} className="Login_Container">
      <LoadingFade logo={logoNextia} disp={disp.toString()} />
      <div>
        <CenterLog className="Login_Center" height={height}>
          <LogoNextia logo={logoNextia} />
          <FormLogin />
          <ErrorLogin />
        </CenterLog>
      </div>
    </ContainerLog>
  );
};

export default Login;
