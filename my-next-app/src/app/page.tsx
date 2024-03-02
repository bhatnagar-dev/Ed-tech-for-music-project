import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinar";

export default function Home() {
  return (
    <main className = "min-h-screen bg-black/[0.96] antialiased b-grid-white/[0.2]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <UpcomingWebinars />
    </main>
  );
}
