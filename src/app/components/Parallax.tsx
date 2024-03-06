"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutHero from "./about/AboutHero";
import Mid from "./about/Mid";
import DArrowDown from "./DArrowDown";

const Paralaxx = () => {
  const message =
    "Utforska ditt inre välmående, Vägen till självinsikt och förändring";
  return (
    <Parallax pages={3} className="animation bg-secondary top-0 left-0">
      {/*First page */}
      {/* Hero layer */}
      <ParallaxLayer className="z-30" offset={0} speed={0.2}>
        <Hero message={message} />
      </ParallaxLayer>

      {/* layer 0 */}
      <ParallaxLayer className="z-0" offset={0} speed={0}>
        <div className="animation_layer parallax" id="layer0"></div>
      </ParallaxLayer>

      {/* layer 1 */}
      <ParallaxLayer className="z-10" offset={0} speed={0.3}>
        <div className="animation_layer parallax" id="layer1"></div>
      </ParallaxLayer>

      {/* layer 2 */}
      <ParallaxLayer className="z-20" offset={0} speed={0.6}>
        <div className="animation_layer parallax" id="layer2"></div>
      </ParallaxLayer>

      {/* Layer 3 */}
      <ParallaxLayer className="z-30" offset={0} speed={0.8}>
        <div className="animation_layer parallax" id="layer3"></div>
      </ParallaxLayer>

      {/* Layer 4 */}
      <ParallaxLayer className="z-40" offset={0} speed={1.3}>
        <div className="animation_layer parallax" id="layer4"></div>
      </ParallaxLayer>

      {/* Second page */}
      <ParallaxLayer offset={1} speed={0.5}>
        <div className="h-4/6 md:h-screen flex justify-center flex-col items-center ">
          <AboutHero />
          <DArrowDown />
        </div>

        <div className="flex items-center justify-center bg-secondary-blue">
          <Mid />
        </div>
      </ParallaxLayer>

      {/* Third page */}
      <ParallaxLayer offset={2} speed={0.2}>
        <div className="fixed bottom-0 w-screen">
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Paralaxx;
