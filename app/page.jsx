import BookingSection from "../components/BookingSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PackagesSection from "../components/PackagesSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import StoreSection from "../components/StoreSection";
import TipsSection from "../components/TipsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <ServicesSection />
        <PackagesSection />
        <ProcessSection />
        <BookingSection />
        <StoreSection />
        <TipsSection />
      </main>
      <Footer />
    </>
  );
}
