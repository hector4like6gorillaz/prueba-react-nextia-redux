import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";

import { envApiDirToken } from "../../App/components/ApiCall";
import { Container, Main } from "../../styles/Model";
import { WalletInit } from "./models/Wallets";
import { initialLandingBenevits } from "./models/Benevits";
import NavBAr from "../../GlobalComponents/NavBAr";
import WalletsBenebits from "./components/WalletsBenebits";
import { useAppSelector } from "../../App/components/ReduxHooks";
import { selectToken } from "../../App/components/reduxSlices/CookiesSlice";

const logoNextia =
  "https://raw.githubusercontent.com/hector4like6gorillaz/crkb-hector/main/logo.png";

const Home = () => {
  const Token = useAppSelector(selectToken);

  const [wallets, setWallets] = useState([WalletInit]);
  const [landing, setLanding] = useState(initialLandingBenevits);

  const respo = async (page: string, token: string) =>
    envApiDirToken(page, token);
  async function loadapi(dir: string) {
    const resp: any = await respo(dir, "s");
    const data = resp?.data;
    setWallets(data);
    //console.log(data);
  }
  async function loadapi2(dir: string) {
    const resp: any = await respo(dir, Token);
    const data = resp.data;

    setLanding(data);
    //console.log(data);
  }
  useEffect(() => {
    loadapi("member/wallets");
    loadapi2("member/landing_benevits");
    console.log(Cookies.get("pruebaUser"));
    return () => {
      loadapi("member/wallets");
      loadapi2("member/landing_benevits");
    };
  }, []);

  useEffect(() => {
    landing === undefined && loadapi2("member/landing_benevits");
  }, [landing]);
  //
  return (
    <Container className="contenedor">
      <style>{`body { background-color:#f2f2f2`}</style>
      <NavBAr logo={logoNextia} />

      <Main className="contenido">
        {landing !== undefined && (
          <WalletsBenebits wallets={wallets} landingBenevits={landing} />
        )}
      </Main>
    </Container>
  );
};

export default Home;
