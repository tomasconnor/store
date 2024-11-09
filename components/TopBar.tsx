import React from "react";

const TopBar: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex items-center justify-center bg-white text-black p-2">
      <p className="text-sm uppercase">Free shipping on all orders over $20</p>
    </div>
  );
};

export default TopBar;
