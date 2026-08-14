import ScrollReveal from "./ScrollReveal";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="scale" delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t("header")}
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
