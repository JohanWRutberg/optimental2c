"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";
import Hero from "./Hero";
import Footer from "./Footer";

const Paralaxx = () => {
  const message =
    "Utforska ditt inre välmående, Vägen till självinsikt och förändring";
  return (
    <Parallax pages={2} className="animation bg-secondary top-0 left-0">
      {/* Hero layer */}
      <div className="">
        <ParallaxLayer className="z-30" offset={0} speed={0.2}>
          <Hero message={message} />
        </ParallaxLayer>
      </div>

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
      <ParallaxLayer offset={1} speed={0.9}>
        <div className="fixed top-0 w-screen mt-5 text-ellipsis overflow-hidden">
          <div>
            <TextBlock />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
        <div className="fixed bottom-0 w-screen">
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Paralaxx;
