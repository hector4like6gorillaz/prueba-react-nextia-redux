import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../App/components/ReduxHooks";
import {
  BadResponse,
  HandleBadResponse,
  Label,
} from "../../../App/components/reduxSlices/FormSlice";
import {
  ErrorMesage,
  LogParagraph,
  ErrorLog,
} from "../../../styles/styledGlobalComponents";

const ErrorLogin = () => {
  const badResponse = useAppSelector(BadResponse);
  const label = useAppSelector(Label);

  const dispatch = useAppDispatch();
  return (
    <>
      <ErrorLog display={badResponse.toString()}></ErrorLog>
      <ErrorMesage display={badResponse.toString()}>
        <LogParagraph>{label}</LogParagraph>

        <LogParagraph
          color={"blue"}
          border
          onClick={() => dispatch(HandleBadResponse(!badResponse))}
          cursor={"true"}
        >
          Ok
        </LogParagraph>
      </ErrorMesage>
    </>
  );
};

export default ErrorLogin;
