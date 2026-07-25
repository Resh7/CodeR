import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About, Approach, CertificationsAndTestimonials, Contact, Gallery, Services, WhyChooseUs } from "@/components/sections";
import { Footer } from "@/components/footer";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MOHANA SRI CNC TECHNICS",
    description: "CNC wire cutting, precision engineering, industrial manufacturing and government project support.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "H.No: 6, Akshay Enclave, 2-181/34-35/2, Shobana Colony, Balanagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500042",
      addressCountry: "IN"
    }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <CertificationsAndTestimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
