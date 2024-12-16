import { FC, memo, ChangeEventHandler } from "react";

type TextBoxProps = {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextBox: FC<TextBoxProps> = (props) => {
  const { value, placeholder, onChange } = props;

  return <input type="text" value={value} placeholder={placeholder} onChange={onChange} />;
};

export default memo(TextBox);
