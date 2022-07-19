import { LoginStyle } from "styled/global";
import { Form } from "components/form";
import { Input } from "components/input";
import { Button } from "components/button";

const SignIn = () => {
  return (
    <>
      <LoginStyle />
      <Form
        title="Faça seu login"
        secondaryTitle="Novo por aqui?"
        linkText="Crie sua conta"
        link="/signup"
      >
        <Input variant="outline" label="Endereço de email" type="email" />
        <Input variant="outline" label="Senha" type="password" />
        <Button variant="pink">Fazer Login</Button>
      </Form>
    </>
  );
};

export default SignIn;
