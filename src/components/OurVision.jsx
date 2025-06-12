import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { useTranslation } from "react-i18next";

export default function OurVision() {
  const { t } = useTranslation();

  const content = [
    {
      title: t("ourVision.vision.title"),
      description: t("ourVision.vision.description"),
      content: (
        <div className="">
          <img
            src="/images/our-vision.jpg"
            alt={t("ourVision.vision.imageAlt")}
            className="object-cover w-full h-auto"
          />
        </div>
      ),
    },
    {
      title: t("ourVision.mission.title"),
      description: t("ourVision.mission.description"),
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/images/our-vision.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt={t("ourVision.mission.imageAlt")}
          />
        </div>
      ),
    },
    {
      title: t("ourVision.coaching.title"),
      description: t("ourVision.coaching.description"),
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/images/free-coaching.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt={t("ourVision.coaching.imageAlt")}
          />
        </div>
      ),
    },
    {
      title: t("ourVision.appointment.title"),
      description: t("ourVision.appointment.description"),
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/images/appointment.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt={t("ourVision.appointment.imageAlt")}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full pt-4">
      <StickyScroll content={content} />
    </div>
  );
}
