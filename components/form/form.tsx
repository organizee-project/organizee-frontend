import { FormWrapper, Title, SecondaryTitle } from "./styles";
import Link from "next/link";
import { FormEventHandler } from "react";

export const Form = ({
  title,
  secondaryTitle,
  link,
  linkText,
  children,
  onSubmit,
}: PropTypes) => (
  <FormWrapper onSubmit={onSubmit}>
    <Title>{title}</Title>
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
  onSubmit: FormEventHandler<HTMLFormElement>;
}
