import { FaqSection, FaqSectionItem } from "@/components/common/faq-section";
import { data } from "@/contents/services/study";

export const StudyFaqSection = () => {
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
