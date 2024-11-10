import React from "react";

import Link from "next/link";

import Menu from "@/components/Menu";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ShoppingCart } from "lucide-react";

const Header: React.FC = (): React.JSX.Element => {
  return (
    <header className="flex items-center justify-between p-6">
      <h1>
        <Link href="/">TACTICAL FITNESS</Link>
      </h1>

      <nav className="flex items-center gap-x-2">
        <Button variant="ghost" className="[&_svg]:size-5 h-12 relative">
          <Badge className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center">
            0
          </Badge>
          <ShoppingCart />
        </Button>

        <Menu />
      </nav>
    </header>
  );
};

export default Header;
