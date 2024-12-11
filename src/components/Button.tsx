import { FC, memo, MouseEventHandler, PropsWithChildren } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
