import React from "react";

const TopBar: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex items-center justify-center bg-white text-black p-2">
      <p className="text-sm uppercase text-center">
        Free Shipping on Orders Over $20 Plus a Gift in Every Bundle!
      </p>
    </div>
  );
};

export default TopBar;
