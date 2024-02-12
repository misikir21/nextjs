import React from "react";
import Links from "@/app/links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>LOGO</div>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
