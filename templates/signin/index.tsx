import { useState } from "react";
import { LoginStyle } from "styled/global";
import { Form, Field } from "components/form";
import { Button } from "components/button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <LoginStyle />
      <Form
        title="Faça seu login"
        secondaryTitle="Novo por aqui?"
        linkText="Crie sua conta"
        link="/signup"
        onSubmit={onSubmit}
      >
        <Field
          variant="outline"
          label="Endereço de email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          variant="outline"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="pink">Fazer Login</Button>
      </Form>
    </>
  );
};

export default SignIn;
