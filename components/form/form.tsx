import { FormWrapper, SecondaryTitle } from "./styles";
import Link from "next/link";
import { FormEventHandler } from "react";
import { Title } from "styles/styles";

export const Form = ({
  title,
  secondaryTitle,
  link,
  linkText,
  children,
  onSubmit,
}: PropTypes) => (
  <FormWrapper onSubmit={onSubmit}>
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
  onSubmit: FormEventHandler<HTMLFormElement>;
}
