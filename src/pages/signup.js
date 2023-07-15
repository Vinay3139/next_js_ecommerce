import Link from "next/link";
import styles from "../styles/signup.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignup = () => {
    console.log(name, email, password);
  };
  return (
    <div className={styles.signup_container}>
      <h3>SignUP</h3>
      <form onSubmit={userSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          signup
        </Button>
        <Link href="/login">
          <h5>Already have a account ?</h5>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
