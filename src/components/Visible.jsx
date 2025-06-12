import React from "react";
import { FlipWords } from "./ui/FlipWords";
import { useTranslation } from "react-i18next";

export default function Visible() {
  const { t } = useTranslation();
  const services = [
    t("visible.services.coaching"),
    t("visible.services.webDesign"),
    t("visible.services.marketing"),
    t("visible.services.community"),
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 pt-5 pb-20 ">
      <hr className="text-green mb-10 mx-auto w-24 sm:w-40 md:w-60 lg:w-96" />

      <div className="mt-12 flex flex-col items-center overflow-hidden w-full">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 text-center">
          {t("visible.flipIntro")}
          <FlipWords words={services} /> <br />
          {t("visible.flipOutro")}
        </div>
      </div>
      {/* <h1 className="text-center text-lg md:text-3xl lg:text-5xl">
        {t("visible.title")}
      </h1> */}
      <p className="text-center text-lg md:text-xl lg:text-2xl mt-5 mb-10">
        {t("visible.description")}
      </p>
    </div>
  );
}
