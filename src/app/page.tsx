import type { ReactElement } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import WhatsIncluded from "@/components/WhatsIncluded";
import MembershipVsInsurance from "@/components/MembershipVsInsurance";
import Faq from "@/components/Faq";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Page(): ReactElement {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <TrustBar />
        <WhoItsFor />
        <HowItWorks />
        <WhatsIncluded />
        <MembershipVsInsurance />
        <Faq />
        <GetStarted />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
