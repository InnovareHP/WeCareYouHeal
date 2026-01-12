import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { Footer } from "../components/ui/footer";
import Header from "../components/ui/header";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "We Care, You Heal | Caregiving Services",
      },
      {
        name: "description",
        content:
          "WeCareYouHeal provides compassionate, high-quality healthcare staffing and non-medical support services designed to enhance wellbeing for facilities and individuals.",
      },
      { name: "author", content: "WeCareYouHeal" },
      {
        name: "keywords",
        content:
          "healthcare staffing, nursing services, home care, medical professionals, non-medical services, public health consulting, WeCareYouHeal, Chapel Hill NC",
      },

      // Open Graph (for Facebook, LinkedIn, etc.)
      {
        property: "og:title",
        content: "WeCareYouHeal | Healthcare Staffing & Support",
      },
      {
        property: "og:description",
        content:
          "Reliable and compassionate healthcare staffing and non-medical services tailored to your facility's needs. Partner with WeCareYouHeal today.",
      },
      {
        property: "og:image",
        content: "https://wecareyouheal.com/image/logo.webp", // replace with your real OG image
      },
      { property: "og:url", content: "https://wecareyouheal.com" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "WeCareYouHeal" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "We Care, You Heal | Caregiving Services",
      },
      {
        name: "twitter:description",
        content:
          "Connecting healthcare facilities with skilled professionals who truly care. Your trusted partner for staffing and wellbeing support.",
      },
      {
        name: "twitter:image",
        content: "https://wecareyouheal.com/image/logo.webp", // replace with your image
      },

      // Theme and App Meta
      { name: "theme-color", content: "#0f766e" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "apple-mobile-web-app-title", content: "We Care, You Heal" },
    ],

    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "canonical", href: "https://wecareyouheal.com" },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow overflow-x-hidden">{children}</main>
        <Footer />

        <Scripts />
      </body>
    </html>
  );
}
