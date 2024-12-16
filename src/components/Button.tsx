import { FC, memo, MouseEventHandler, PropsWithChildren } from "react";

type ButtonProps = {
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { style, disabled, children, onClick } = props;

  return (
    <button type="button" disabled={disabled} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
