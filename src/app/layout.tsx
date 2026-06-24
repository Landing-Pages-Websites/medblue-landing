import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedBlue National Plan — Healthcare For People Building Their Future",
  description:
    "MedBlue National Plan is a healthcare membership for self-employed people in Houston — $40/month or $336/year. $0 24/7 telehealth, virtual primary care, plus dental, lab, imaging and pharmacy savings. Not insurance — a membership built for builders.",
  openGraph: {
    title: "MedBlue National Plan — Healthcare For People Building Their Future",
    description:
      "A healthcare membership for Houston's gig workers, freelancers, and small business owners. $40/month. $0 24/7 telehealth and real savings on dental, labs, imaging and pharmacy. Not insurance.",
    type: "website",
  },
};

// MEGA Admin registered IDs (MedBlue National Plan)
const SITE_ID = "4450ba97-4120-49e4-954c-d0ac6f7a9c9e";
const SITE_KEY = "mc8jd0xkrk3ivffh";
const META_PIXEL_ID = "1368420204074027";
const GTM_ID = "GTM-K9N93KJS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={`h-full antialiased ${instrument.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* MegaTag config — the optimizer injects GTM + Meta Pixel from this config. */}
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",pixelId:"${META_PIXEL_ID}",gtmId:"${GTM_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-navy">
        {children}

        {/* CTM universal call-tracking script */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
