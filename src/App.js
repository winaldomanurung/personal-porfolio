import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParallaxHeroSection";
import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection";

import FaceOne from "../src/assets/images/faceOne.png";
import LandscapeOne from "../src/assets/images/landscapeOne.png";
import LandscapeTwo from "../src/assets/images/landscapeTwo.png";

const StyledHeroSection = styled.section`
position: relative;
height: 100vh;
width 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
img {
  height: 25vmin;
  pointer-events: none;
}
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin.</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ContentSection
        title={"Take Care"}
        text={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
        }
      />

      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name={"Christian Guard"}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossreveal={"xPercent"}
      />
      <ContentSection
        title={"Take Care"}
        text={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeTwo}
        name={"Christian Guard"}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossreveal={"yPercent"}
      />
      <ContentSection
        title={"Take Care"}
        text={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
        }
      />
    </>
  );
}

export default App;
