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
      {/* <HomeAbout /> */}
      <HomeElaborate
        title={"Privacy"}
        subtitle={
          "Anonymity would allow users to express themselves without fear of personal repercussions or judgment based on their identity."
        }
        img_url={"./images/world.png"}
      />
      <HomeElaborate
        title={"Security"}
        subtitle={
          "Your statements are saved on a decentralized platform where your thoughts and opinions cannot be altered or brought down by any system"
        }
        img_url={"./images/block.png"}
      />

      <HomeElaborate
        title={"Freedom of Speech"}
        subtitle={
          "People might feel more comfortable sharing diverse opinions and engaging in open discussions if their identities were protected."
        }
        img_url={"./images/secure_chat.png"}
      />
      <HomeIntegration />
      <HomeFooter />
    </main>
  );
}
