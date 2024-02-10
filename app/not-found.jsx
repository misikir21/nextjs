import React from "react";
import Link from "next/link";

const notfound = () => {
  return (
    <div>
      <h2>this is our falult the page your looking exist</h2>;
      <Link href="/">return to home</Link>;
    </div>
  );
};

export default notfound;
