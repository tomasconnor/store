import React from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import ProductPreviewList from "@/components/ProductPreviewList";

export default function Home(): React.JSX.Element {
  return (
    <>
      <TopBar />
      <Header />

      <main>
        <ProductPreviewList />
      </main>
    </>
  );
}
