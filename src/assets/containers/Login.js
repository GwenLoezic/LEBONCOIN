// ****************************************************
// *---------------------- LOGIN ---------------------*
// ****************************************************

import React from "react";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
        <form>
        <input
          type="text"
          value={""}
        />
        <input
          type="password"
          value={""}
        />
        <button

          type="submit"
        >
          Se connecter
        </button>
        <Link to="/">
        <button

          type="submit"
        >
          Créer un compte
        </button>
        </Link>
      </form>
    </div>
  );
};
export default Login;
