import ScrollFloat from "./ui/ScrollFloat";
import { useTranslation } from "react-i18next";

const WhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b py-12 mt-40 bg-black-light px-4 md:px-6 lg:px-8">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="mb-10 text-red text-lg md:text-4xl lg:text-5xl font-bold">
            {t("whatWeDo.title")}
          </h1>
          <div className=" rounded-2xl space-y-6">
            <p className="text-lg leading-relaxed">
              {t("whatWeDo.paragraph1")}
            </p>
            <p className="text-lg leading-relaxed">
              {t("whatWeDo.paragraph2")}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/what.jpg"
            alt={t("whatWeDo.imageAlt")}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
