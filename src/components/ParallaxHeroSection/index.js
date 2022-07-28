import styled from "styled-components";

import ForegroundHero from "./ForegroundHero";
import MidgroundHero from "./MidgroundHero";
import BackgroundHero from "./BackgroundHero";

const StyledSVGWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 30vw;
`;

function ParallaxHeroSection() {
  return (
    <StyledSVGWrapper>
      <BackgroundHero />
      <MidgroundHero />
      <ForegroundHero />
    </StyledSVGWrapper>
  );
}

export default ParallaxHeroSection;
