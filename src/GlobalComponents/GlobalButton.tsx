import { ButtonGlobal } from "../styles/styledGlobalComponents";

const GlobalButton = (props: {
  name: string;
  disabled: boolean;
  handleFunction: () => void;
  area?: string;
  borderRadius?: number;

  //secondary?: boolean;
}) => {
  const { name, handleFunction, disabled, area, borderRadius /*secondary*/ } =
    props;
  return (
    <ButtonGlobal
      borderRadius={borderRadius}
      onClick={handleFunction}
      disabled={disabled}
      area={area}
    >
      {name}
    </ButtonGlobal>
  );
};

export default GlobalButton;
