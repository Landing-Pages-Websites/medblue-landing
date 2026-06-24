import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Affordable Coverage for the Self-Employed — Plans From $189/mo | The Exchange",
  description:
    "Real, nationwide health coverage built for people who work for themselves — plans starting at $189/month, covering you 24/7 on and off the job. Healthy? You could qualify for lower premiums and little-to-no deductible. Get a free, no-obligation quote from a licensed agent. Call 1-888-569-7765.",
  openGraph: {
    title: "Coverage Built for the Self-Employed — From $189/mo | The Exchange",
    description:
      "Nationwide coverage for contractors, realtors, sales pros, and small business owners. Plans from $189/month, 24/7 on and off the job. Free quote from a licensed agent. Call 1-888-569-7765.",
    type: "website",
  },
};

// MEGA Admin registered IDs (PPO Exchange)
const SITE_ID = "4fb1708b-a1d4-4c2a-9451-2b272a52dd39";
const SITE_KEY = "fq7p1qftus5fmgbg";
const META_PIXEL_ID = "1756331059151753";
const GTM_ID = "GTM-PRQKLNXR";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={`h-full antialiased ${jakarta.variable} ${inter.variable}`}>
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
      <body className="min-h-full flex flex-col bg-white text-navy">
        {children}

        {/* CTM universal call-tracking script */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
