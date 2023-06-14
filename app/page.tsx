import HomeAbout from "./home/about";
import HomeElaborate from "./home/elaborate";
import HomeFooter from "./home/footer";
import HeroSection from "./home/hero";
import HomeIntegration from "./home/integration";
import HomeNavbar from "./home/navbar";
import HomeObjectives from "./home/objectives";

export default function Home() {
  return (
    <main>
      <HomeNavbar />
      <HeroSection />
      <HomeObjectives />
      <HomeIntegration />
      {/* <HomeAbout /> */}
      {/* <HomeElaborate /> */}
      {/* <HomeElaborate /> */}
      <HomeFooter />
    </main>
  );
}
