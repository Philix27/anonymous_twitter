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
      <HomeElaborate
        title={"Privacy"}
        subtitle={
          "Anonymity would allow users to express themselves without fear of personal repercussions or judgment based on their identity."
        }
        img_url={"./images/world.png"}
      />
      <HomeElaborate
        title={"Privacy"}
        subtitle={
          "Anonymity would allow users to express themselves without fear of personal repercussions or judgment based on their identity."
        }
        img_url={"./images/block.png"}
      />

      <HomeFooter />
    </main>
  );
}
