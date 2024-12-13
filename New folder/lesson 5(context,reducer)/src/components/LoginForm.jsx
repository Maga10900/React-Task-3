import { useState, useRef } from "react";

function LoginForm() {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  let loginCheck = useRef(false);
  let passwordCheck = useRef(false);

  function handleLogin(ev) {
    setLogin(ev.target.value);
    console.log(login);
  }

  function handlePassword(ev) {
    setPassword(ev.target.value);
    console.log(password);
  }

  const loginRegex = /^[a-z]{8,}$/;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\.).{8,}$/; 

  loginCheck.current = loginRegex.test(login);

  passwordCheck.current = passwordRegex.test(password);

  let active = loginCheck.current && passwordCheck.current;

  return (
    <section>
      <form>
        LOGIN
        <label>
          <input
            onInput={handleLogin}
            type="text"
            placeholder="login"
            name="login"
          />
          <p className={loginCheck.current ? "right" : "wrong"}>
            {loginCheck.current ? "RIGHT" : "WRONG"}
          </p>
        </label>
        <label>
          PASSWORD
          <input
            type="text"
            onInput={handlePassword}
            placeholder="password"
            name="password"
          />
          <p className={passwordCheck.current ? "right" : "wrong"}>
            {passwordCheck.current ? "RIGHT" : "WRONG"}
          </p>
        </label>
        <button disabled={!active}>LOGIN</button>
      </form>
    </section>
  );
}

export default LoginForm
