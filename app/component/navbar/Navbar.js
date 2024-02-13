import React from "react";
import Links from "@/app/links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
