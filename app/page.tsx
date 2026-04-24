import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LMSSection from "@/components/LMSSection";
import CorporateTraining from "@/components/CorporateTraining";
import IndividualTraining from "@/components/IndividualTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import TransformationHub from "@/components/TransformationHub";
import TrainingTheConsultant from "@/components/TrainingTheConsultant";
import BookingBanner from "@/components/BookingBanner";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LMSSection />
      <CorporateTraining />
      <IndividualTraining />
      <CapacityDevelopment />
      <ManagementDevelopment />
      <TransformationHub />
      <TrainingTheConsultant />
      <BookingBanner />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}