import React from "react";

const Login = () => {
  return (
    <section>
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
    </section>
  );
};

export default Login;
