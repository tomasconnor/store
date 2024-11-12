import React from "react";
import Link from "next/link";

const TopBar: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex items-center justify-center bg-white p-2">
      <p className="text-sm uppercase text-center text-black">
        Free Shipping on Orders Over $20 Plus a Gift in Every{" "}
        <Link className="underline hover:no-underline" href="/bundle">
          Bundle
        </Link>
        !
      </p>
    </div>
  );
};

export default TopBar;
