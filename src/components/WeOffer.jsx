import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../components/ui/GlowingEffect";
import { useTranslation } from "react-i18next";

export default function GlowingEffectDemo() {
  const { t } = useTranslation();

  return (
    <div className="mt-20 mb-10 px-4 md:px-6 lg:px-8">
      <h1 className="mb-10 text-red text-lg md:text-4xl lg:text-5xl font-bold">
        {t("weOffer.title")}
      </h1>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 ">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<img src="/images/business.png" className="w-10" />}
          title={t("weOffer.items.coaching.title")}
          description={t("weOffer.items.coaching.description")}
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<img src="/images/web.png" className="w-10" />}
          title={t("weOffer.items.webDesign.title")}
          description={t("weOffer.items.webDesign.description")}
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<img src="/images/marketing.png" className="w-10" />}
          title={t("weOffer.items.digitalMarketing.title")}
          description={t("weOffer.items.digitalMarketing.description")}
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<img src="/images/network.png" className="w-10" />}
          title={t("weOffer.items.community.title")}
          description={t("weOffer.items.community.description")}
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={
            <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title={t("weOffer.items.workshops.title")}
          description={t("weOffer.items.workshops.description")}
        />
      </ul>
    </div>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
