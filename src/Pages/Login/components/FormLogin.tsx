import { FormControlState } from "@material-ui/core";
import React, { useEffect } from "react";
import { ApiPost } from "../../../App/components/ApiCall";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../App/components/ReduxHooks";
import {
  HandleCurrentUser,
  HandleToken,
} from "../../../App/components/reduxSlices/CookiesSlice";
import {
  BadResponse,
  Disabled,
  Email,
  HandleBadResponse,
  HandleDisabled,
  HandleEmail,
  HandleHover,
  HandleLabel,
  HandlePassword,
  Hover,
  Password,
  UserLogin,
} from "../../../App/components/reduxSlices/FormSlice";
import GlobalButton from "../../../GlobalComponents/GlobalButton";
import { InputLog, LoginForm } from "../../../styles/styledGlobalComponents";

const FormLogin = () => {
  const email = useAppSelector(Email);
  const password = useAppSelector(Password);
  const userLogin = useAppSelector(UserLogin);
  const disabled = useAppSelector(Disabled);
  const badResponse = useAppSelector(BadResponse);
  const hover = useAppSelector(Hover);

  const dispatch = useAppDispatch();

  useEffect(() => {
    userLogin.user.email !== "" && userLogin.user.password !== ""
      ? dispatch(HandleDisabled(false))
      : dispatch(HandleDisabled(true));
  }, [userLogin]);

  const response = async (page: string, dat: any) => ApiPost(page, dat);
  async function loadapi(dat: any) {
    const resp: any = await response("login", dat);

    const data = resp?.data;

    if (data !== undefined) {
      dispatch(HandleCurrentUser(JSON.stringify(data)));
      dispatch(HandleToken(resp.headers.authorization));
      
      dispatch(HandleBadResponse(false));
    } else {
      dispatch(
        HandleLabel(
          "Correo y/o contraseña no validos, por favor verificar e intentar nuevamente."
        )
      );
      dispatch(HandleBadResponse(true));
    }
  }
  function Verify(): void {
    function errorEmail() {
      dispatch(
        HandleLabel(
          "Por favor Verificar la direccion de correo e intente nuevamente."
        )
      );
      dispatch(HandleBadResponse(!badResponse));
    }

    setTimeout(() => {
      userLogin.user.email.includes("@") &&
      userLogin.user.email.split("@")[1].includes(".")
        ? loadapi(userLogin)
        : errorEmail();
    }, 500);
  }
  const handleKeyPress = (
    e: React.KeyboardEvent<FormControlState>,
    type: string
  ) => {
    switch (type) {
      case "email":
        if (e.key === "Enter") document.getElementById("pass")?.focus();
        break;
      case "password":
        if (e.key === "Enter" && hover) Verify();
        break;
      default:
        break;
    }
  };

  return (
    <LoginForm className="Login_Form" area="logform">
      <p
        style={{
          alignSelf: "end",
          cursor: "pointer",
          paddingRight: "10%",
          gridArea: "forget",
          justifySelf: "end",
          userSelect: "none",
        }}
      >
        Olvide mi contraseña
      </p>
      <InputLog
        className="input"
        area="email"
        value={email}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          dispatch(HandleEmail(e.currentTarget.value))
        }
        type="email"
        placeholder="Ingresa tu correo"
        onKeyPress={(e: React.KeyboardEvent<FormControlState>) =>
          handleKeyPress(e, "email")
        }
      />
      <InputLog
        className="input"
        area="pass"
        id="pass"
        value={password}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          dispatch(HandlePassword(e.currentTarget.value))
        }
        type="password"
        placeholder="Ingresa tu contraseña"
        onMouseEnter={() => dispatch(HandleHover(true))}
        onMouseLeave={() => dispatch(HandleHover(false))}
        onKeyPress={(e: React.KeyboardEvent<FormControlState>) =>
          handleKeyPress(e, "password")
        }
      />
      <GlobalButton
        area="login"
        name="Entrar"
        disabled={disabled}
        handleFunction={Verify}
      />
    </LoginForm>
  );
};

export default FormLogin;
