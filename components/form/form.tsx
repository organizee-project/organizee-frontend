import { FormWrapper, SecondaryTitle } from "./styles";
import Link from "next/link";
import { Title } from "styles";

export const Form = ({
  title,
  secondaryTitle,
  link,
  linkText,
  children,
}: PropTypes) => (
  <FormWrapper>
    <Title color="gray">{title}</Title>
    <SecondaryTitle>
      {secondaryTitle} <Link href={link}>{linkText}</Link>
    </SecondaryTitle>
    {children}
  </FormWrapper>
);

interface PropTypes {
  title: string;
  secondaryTitle: string;
  link: string;
  linkText: string;
  children: JSX.Element | JSX.Element[];
}
