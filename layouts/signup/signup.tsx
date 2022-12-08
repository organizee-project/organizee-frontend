import { useContext, useEffect, useState } from "react";

import { LoginStyle } from "styles/global";
import { Form, Field } from "components/form";
import { Button } from "components/button";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "utils/firebase";
import { AuthContext } from "contexts/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const SignUp = () => {
  const { register } = useContext(AuthContext);
  const [registerByGoogle, setRegisterByGoogle] = useState(false);
  const [user, loading] = useAuthState(auth);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    username: "",
    surname: "",
  } as IInputs);

  const handleOnChange = ({ target }, key) => {
    setInputs({ ...inputs, [key]: target.value });
  };

  useEffect(() => {
    if (loading) return;

    if (user) {
      login();
    }
  }, [user, loading]);

  const login = async () => {
    const newUser = {
      name: inputs.name,
      username: inputs.username,
      surname: inputs.surname,
    };

    try {
      register(newUser);
    } catch (ex) {
      console.log(ex);
    }
  };

  const registerWithGoogle = async () => {
    await signInWithGoogle();
    setRegisterByGoogle(true);
  };

  const sendRegister = async () => {
    if (registerByGoogle) return;

    if (
      inputs.password !== inputs.confirmPassword ||
      (inputs.password.length < 8 && registerByGoogle)
    )
      return;

    await registerWithEmailAndPassword(
      inputs.name,
      inputs.email,
      inputs.password
    );
    return;
  };

  return (
    <>
      <LoginStyle />
      <Form
        title={registerByGoogle ? "Finalize sua conta" : "Criar uma conta"}
        secondaryTitle={
          registerByGoogle
            ? "Preencha as informações para finalizar seu cadastro"
            : "Já tem uma conta?"
        }
        linkText="Faça o login!"
        link="/signin"
      >
        {!registerByGoogle && (
          <Field
            variant="outline"
            label="Endereço de email"
            type="email"
            value={inputs.email}
            onChange={(e) => handleOnChange(e, "email")}
          />
        )}
        <Field
          variant="outline"
          label="Nome"
          value={inputs.name}
          onChange={(e) => handleOnChange(e, "name")}
        />
        <Field
          variant="outline"
          label="Sobrenome"
          value={inputs.surname}
          onChange={(e) => handleOnChange(e, "surname")}
        />
        <Field
          variant="outline"
          label="Nome de Visualização"
          value={inputs.username}
          onChange={(e) => handleOnChange(e, "username")}
        />
        {!registerByGoogle && (
          <Field
            variant="outline"
            label="Senha"
            type="password"
            valid={inputs.password?.length > 7}
            required="Sua senha precisa ter no mínimo 8 dígitos"
            value={inputs.password}
            onChange={(e) => handleOnChange(e, "password")}
          />
        )}
        {!registerByGoogle && (
          <Field
            variant="outline"
            label="Confirmar Senha"
            type="password"
            valid={inputs.confirmPassword === inputs.password}
            required="As senhas não batem"
            value={inputs.confirmPassword}
            onChange={(e) => handleOnChange(e, "confirmPassword")}
          />
        )}
        <Button variant="pink" onClick={sendRegister} width="100%">
          Criar conta
        </Button>
        {!registerByGoogle && (
          <Button variant="pink" onClick={registerWithGoogle} width="100%">
            Continuar com o Google
          </Button>
        )}
      </Form>
    </>
  );
};

interface IInputs {
  email: string;
  name: string;
  username: string;
  surname: string;
  password: string;
  confirmPassword: string;
}
