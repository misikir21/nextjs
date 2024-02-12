import React from "react";
import Links from "@/app/links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      LOGO
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
