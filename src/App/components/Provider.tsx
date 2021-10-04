import { createContext, ReactElement,  useState } from "react";
import Cookies from "js-cookie";
import { currentUser } from "../models/CurrentUser";
import { WalletInit, WalletModel } from "../../Pages/Home/models/Wallets";

export const Context = createContext<{
  User: currentUser | undefined;
  setCurrentUser: (user: any | undefined) => void;
  LogOut: () => void;
  Token: string;
  setToken: (user: any) => void;
  Wallets: Array<WalletModel>;
  setWallet: (user: any) => void;

  menu: boolean;
  setMenu: (user: any) => void;
}>({
  User: undefined,
  setCurrentUser: (user: any | undefined) => {},
  LogOut: () => {},
  Token: "",
  setToken: (user: string | undefined) => {},
  Wallets: [WalletInit],
  setWallet: (user: WalletModel) => {},

  menu: false,
  setMenu: (user: boolean) => {},
});

const ContextProvider = ({ children }: { children: ReactElement }) => {
  const localValues = (type: string) => {
    switch (type) {
      case "user":
        return Cookies.get("NextiaAuth")
          ? JSON.parse(Cookies.get("NextiaAuth") || "{no:'vacio'}")
          : undefined;
      case "token":
        return Cookies.get("NextiaToken") ? Cookies.get("NextiaToken") : "";
      default:
        return undefined;
    }
  };

  const [currentuser, setCurrentuser] = useState<currentUser | undefined>(
    localValues("user")
  );

  const [bearertoken, setBearertoken] = useState<string>(localValues("token"));
  const [wallets, setWallets] = useState<Array<WalletModel>>([WalletInit]);
  
  const [menu, setmenu] = useState(false);
  function logOut() {
    Cookies.remove("NextiaAuth");
    Cookies.remove("NextiaToken");
    window.location.reload();
  }

  function Uuser(datos: any) {
    setCurrentuser(datos);
    Cookies.set("NextiaAuth", JSON.stringify(datos));
  }
  function Ttoken(datos: string) {
    setBearertoken(datos);
    Cookies.set("NextiaToken", datos);
  }

  return (
    <Context.Provider
      value={{
        User: currentuser,
        setCurrentUser: Uuser,
        LogOut: logOut,
        Token: bearertoken,
        setToken: Ttoken,
        Wallets: wallets,
        setWallet: setWallets,
        menu: menu,
        setMenu: setmenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
