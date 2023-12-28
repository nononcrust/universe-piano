import { ChatCard } from "@/components/main/chat-card";
import { FaqCard } from "@/components/main/faq-card";
import { LandingSectionSubtitle } from "@/components/main/landing-section-subtitle";
import { LandingSectionTitle } from "@/components/main/landing-section-title";
import { NoticeCard } from "@/components/main/notice-card";

export const SupportSection = () => {
  return (
    <section className="container pt-24">
      <LandingSectionTitle>전체 메뉴</LandingSectionTitle>
      <LandingSectionSubtitle>
        찾으시는 서비스가 있으신가요? 전체 메뉴를 확인해보세요.
      </LandingSectionSubtitle>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* <HelpCenterCard /> */}
        {/* <ServiceCard /> */}
        <ChatCard />
        {/* <ZoomCard /> */}
        <NoticeCard />
        <FaqCard />
      </div>
    </section>
  );
};
