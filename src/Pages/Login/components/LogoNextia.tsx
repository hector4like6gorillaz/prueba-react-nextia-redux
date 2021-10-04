import React from "react";
import {
  LogoDiv,
  LogoImg,
  Path,
  SVG,
} from "../../../styles/styledGlobalComponents";

const LogoNextia = (props: { logo: string }) => {
  const { logo } = props;
  return (
    <LogoDiv margin={true} area="Logo" className="Logo" id="Logo">
      <LogoImg alt="Logo-Nextia" src={logo} pad />
      <SVG viewBox="0 0 500 150" preserveAspectRatio="none">
        <Path d="M-2.54,118.91 C149.99,150.00 349.20,-49.98 678.61,62.66 L500.00,150.00 L0.00,150.00 Z"></Path>
      </SVG>
      <SVG viewBox="0 0 500 150" preserveAspectRatio="none" position>
        <Path d="M-2.54,118.91 C149.99,150.00 349.20,-49.98 678.61,62.66 L500.00,150.00 L0.00,150.00 Z"></Path>
      </SVG>
    </LogoDiv>
  );
};

export default LogoNextia;
