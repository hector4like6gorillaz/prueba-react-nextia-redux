import React from "react";
import {
  LoadingDiv,
  LogoDiv,
  LogoImg,
} from "../../../styles/styledGlobalComponents";

const LoadingFade = (props: { disp: string; logo: string }) => {
  const { disp, logo } = props;
  return (
    <LoadingDiv disp={disp}>
      <LogoDiv fadein={"true"}>
        <LogoImg alt="Logo-Nextia" src={logo} />
      </LogoDiv>
    </LoadingDiv>
  );
};

export default LoadingFade;
