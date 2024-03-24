import { FaqSection, FaqSectionItem } from "@/components/shared/faq-section";
import { data } from "@/contents/services/tutoring";

export const TutoringFaqSection = () => {
  return (
    <FaqSection>
      {data.faq.map((item, index) => (
        <FaqSectionItem
          key={index}
          title={item.title}
          description={item.description}
          value={String(index)}
        />
      ))}
    </FaqSection>
  );
};
