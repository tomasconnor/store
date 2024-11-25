import Link from "next/link";

import Header from "@/components/Header";
import TopBar from "@/components/TopBar";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Error404(): React.JSX.Element {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="w-full">
        <TopBar />
        <Header />
      </div>

      <main className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl text-center uppercase">
          <span className="text-9xl">404</span>
          <br />
          {t("pageNotFound")}
        </h2>

        <Button variant="outline" className="uppercase" asChild>
          <Link href="/">{t("backHome")}</Link>
        </Button>
      </main>

      <footer />
    </div>
  );
}
