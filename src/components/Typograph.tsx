import { FC, ReactNode } from "react";

interface TypographProps {
  variant: "h1" | "h2" | "h3" | "p" | "span";
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Typograph: FC<TypographProps> = ({ variant, children, style, className }) => {
  const Tag = variant;
  return (
    <Tag style={style} className={className}>
      {children}
    </Tag>
  );
};

export default Typograph;
