import { Outline, Default } from "./styles";

export const Input = ({ variant = "default", ...props }) => {
  if (variant === "outline") return <Outline {...props} />;

  return <Default {...props} />;
};
