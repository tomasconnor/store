import React from "react";

import Link from "next/link";

import Menu from "@/components/Menu";

const Header: React.FC = (): React.JSX.Element => {
  return (
    <header className="flex items-center justify-between p-6">
      <h1>
        <Link href="/">TACTICAL FITNESS</Link>
      </h1>

      <Menu />
    </header>
  );
};

export default Header;
