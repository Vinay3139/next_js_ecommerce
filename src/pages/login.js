import Link from "next/link";
import styles from "../styles/login.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.login_container}>
      <h3>LOGIN</h3>
      <form onSubmit={(e) => userLogin(e)}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          login
          <i className="material-icons right"></i>
        </Button>
        <Link href="/signup">
          <h5>Dont have a account ?</h5>
        </Link>
      </form>
    </div>
  );
};

export default Login;
