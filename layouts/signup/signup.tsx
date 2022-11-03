import { useEffect, useState } from "react";

import { LoginStyle } from "styles/global";
import { Form, Field } from "components/form";
import { Button } from "components/button";

import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "utils/firebase";
import { useRouter } from "next/router";
import { createUser, getUser } from "services/users";
import { useCookie } from "utils/hooks";

export const SignUp = () => {
  const router = useRouter();
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

  const { setCookie } = useCookie("user");
  const { setCookie: setToken } = useCookie("token");

  const handleOnChange = ({ target }, key) => {
    setInputs({ ...inputs, [key]: target.value });
  };

  const login = async () => {
    console.log("login");
    const newUser = {
      name: inputs.name,
      username: inputs.username,
      surname: inputs.surname,
    };

    try {
      user.getIdToken().then(async (token) => {
        setToken(token);
        const data = await createUser(newUser);
        setCookie(data);
        router.push("/");
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  const register = async () => {
    if (
      inputs.password !== inputs.confirmPassword ||
      inputs.password.length < 8
    )
      return;

    if (registerByGoogle) {
      await login();
      return;
    }

    await registerWithEmailAndPassword(
      inputs.name,
      inputs.email,
      inputs.password
    );
    console.log("bb");
    await login();
    return;
  };

  // useEffect(() => {
  //   if (loading) return;

  //   if (user && !registerByGoogle) {
  //     login();
  //   }
  // }, [user, loading]);

  const registerWithGoogle = async () => {
    const user = await signInWithGoogle();
    setToken(user.getIdToken);
    setRegisterByGoogle(true);
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
        <Field
          variant="outline"
          label="Senha"
          type="password"
          valid={inputs.password?.length > 7}
          required="Sua senha precisa ter no mínimo 8 dígitos"
          value={inputs.password}
          onChange={(e) => handleOnChange(e, "password")}
        />
        <Field
          variant="outline"
          label="Confirmar Senha"
          type="password"
          valid={inputs.confirmPassword === inputs.password}
          required="As senhas não batem"
          value={inputs.confirmPassword}
          onChange={(e) => handleOnChange(e, "confirmPassword")}
        />
        <Button variant="pink" onClick={register} width="100%">
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
