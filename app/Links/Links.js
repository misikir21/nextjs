import React from "react";
import Link from "next/link";
function Links() {
  const link = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
    { title: "blog", path: "/blog" },
  ];
  return (
    <div>
      {link.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
