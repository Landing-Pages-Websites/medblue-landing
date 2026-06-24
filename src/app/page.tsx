import type { ReactElement } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhoItsFor from "@/components/WhoItsFor";
import WhyThisCoverage from "@/components/WhyThisCoverage";
import CoverageHighlights from "@/components/CoverageHighlights";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Page(): ReactElement {
  return (
    <>
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <TrustBar />
        <WhoItsFor />
        <WhyThisCoverage />
        <CoverageHighlights />
        <HowItWorks />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
