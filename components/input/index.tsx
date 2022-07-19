import { Outline, Default, Label as StyledLabel } from "./styles";

export const Input = ({
  variant = "default",
  label = null,
  type = "text",
}: PropTypes) => {
  const Text = () => {
    switch (variant) {
      case "default":
        return <Default type={type} />;
      case "outline":
        return <Outline type={type} />;
    }
  };

  return (
    <>
      {label && <StyledLabel>{label}</StyledLabel>}
      <Text />
    </>
  );
};

interface PropTypes {
  variant: string;
  type: string;
  label: string;
}
