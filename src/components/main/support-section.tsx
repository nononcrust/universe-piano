import { ChatCard } from "./chat-card";
import { FaqCard } from "./faq-card";
import { HelpCenterCard } from "./help-center-card";
import { LandingSectionSubtitle } from "./landing-section-subtitle";
import { LandingSectionTitle } from "./landing-section-title";
import { NoticeCard } from "./notice-card";
import { ServiceCard } from "./service-card";
import { ZoomCard } from "./zoom-card";

export const SupportSection = () => {
  return (
    <section className="container pt-24">
      <LandingSectionTitle>Create your Universe,</LandingSectionTitle>
      <LandingSectionSubtitle>세상에 없던 방식으로</LandingSectionSubtitle>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <HelpCenterCard />
        <ServiceCard />
        <ChatCard />
        <ZoomCard />
        <NoticeCard />
        <FaqCard />
      </div>
    </section>
  );
};
