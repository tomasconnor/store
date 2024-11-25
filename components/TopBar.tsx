import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const TopBar: React.FC = (): React.JSX.Element => {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-center bg-white p-2">
      <p className="text-sm uppercase text-center text-black">
        {t("topBarPart1")}{" "}
        <Link className="underline hover:opacity-85" href="/bundle">
          {t("topBarPart2")}
        </Link>
        !
      </p>
    </div>
  );
};

export default TopBar;
