import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  const { count } = useSelector((state) => state.user);
  return (
    <nav>
      <div className={styles.navbar}>
        <Link href="/" className={styles.brand_logo}>
          MyStore
        </Link>
        <ul id="nav-mobile" className={styles.right}>
          <li>
            <Link href="/cart">cart &nbsp; {count}</Link>
          </li>

          <li>
            <Link href="/login">login</Link>
          </li>
          <li>
            <Link href="/signup">signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
