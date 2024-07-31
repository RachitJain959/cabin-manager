import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  const demoUser = { email: "test@email.com", password: "asdfghjk" };

  function handleSubmitDemo(e) {
    e.preventDefault();
    login(
      //   { email: demoUser.email, password: demoUser.password },
      demoUser,
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" onClick={handleSubmit}>
          {!isLoading ? "Log In" : <SpinnerMini />}
        </Button>
        <Button size="large" onClick={handleSubmitDemo}>
          Explore the app
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
