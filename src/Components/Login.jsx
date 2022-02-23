import React from "react";
import waves from "../assets/wave.svg"

const Login = () => {
  return (
    <section id="login">
      <div>
        <h1>Sign In</h1>
        <p>Sign In To Start Creating TODO'S</p>

        <form>
          <input placeholder="Username"></input>

          <input placeholder="Password"></input>

          <a>Dont have an account? Click Here!</a>

          <button>Login</button>
        </form>
      </div>

      <img src={waves}></img>
    </section>
  );
};

export default Login;
