import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import box from "../assets/images/box.png";
import nightCream from "../assets/images/nightCream.png";
import dayCream from "../assets/images/dayCream.png";

gsap.registerPlugin(ScrollTrigger);

const StyledTextSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #080f0f;
  color: #00efeb;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    width: 60%;
  }
`;

const StyledProductSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #080f0f;
  color: #fff;
  .product__wrapper {
    height: 100vh;
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: end;
    .product-image {
      grid-row: 2;
      grid-column: 2 / span 1;
      align-self: end;
      justify-self: end;
      max-width: 100%;
    }
    p {
      font-weight: 600;
      font-size: 20px;
      margin: 0 0 8px 0;
    }
    .product__text__left {
      display: grid;
      grid-column: 1;
      text-align: right;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }
    .product__text__right {
      display: grid;
      grid-column: 3;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }
    .ghost {
      display: none;
      transform: translateX(8%);
    }
    .product1 img {
      width: 60%;
      margin: auto;
    }
    .product2 img {
      width: 40%;
      margin: auto;
    }
    .product3 img {
      width: 40%;
      margin: auto;
    }
  }
`;

function ProductSection() {
  const textSectionTriggerRef = useRef();
  const productSectionTriggerRef = useRef();
  const productWrapperRef = useRef();
  const boxTextRef = useRef();
  const boxRef = useRef();
  const nightCreamRef = useRef();
  const dayCreamRef = useRef();
  const nightAndDayCreamTextRef = useRef();

  useEffect(() => {
    // untuk membesar dan mengecil
    const scaleDownTween = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: textSectionTriggerRef.current,
        start: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    scaleDownTween
      .fromTo(
        productWrapperRef.current,
        {
          scale: 2.8,
          transformOrigin: "center top",
        },
        {
          scale: 2.2,
          y: "-50%",
        }
      )
      .to(productWrapperRef.current, {
        scale: 1,
        y: "0",
      });

    // end untuk membesar dan mengecil
  }, []);

  useEffect(() => {
    const splitTween = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        // triggernya apa
        trigger: productSectionTriggerRef.current,
        start: "bottom bottom",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        markers: true,
      },
    });
    splitTween
      .to(boxRef.current, {
        x: "-54%",
        duration: 3,
      })
      .to(
        nightCreamRef.current,
        {
          x: "46%",
          duration: 3,
        },
        "-=3" //untuk membuat move at the same time dengan to sebelumnya
      )
      .from(
        boxTextRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        "-=3"
      )
      .from(
        nightAndDayCreamTextRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        "-=3"
      )
      .to(
        boxTextRef.current,
        {
          x: "-30%",
          duration: 3,
        },
        "-=3"
      )
      .to(
        nightAndDayCreamTextRef.current,
        {
          x: "16%",
          duration: 3,
        },
        "-=3"
      )
      .set(dayCreamRef.current, {
        display: "block",
      })
      .from(dayCreamRef.current, {
        autoAlpha: 0,
        transformOrigin: "center center",
        duration: 1,
        scale: 0.95,
      });
  }, []);

  return (
    <>
      <StyledTextSection ref={textSectionTriggerRef}>
        <p className="text__intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          nesciunt laboriosam tempore neque exercitationem harum quis dolor
          sequi sunt autem ipsa dolorem doloribus rerum minus similique,
          deleniti quibusdam sint dicta, placeat necessitatibus qui veritatis!
        </p>
      </StyledTextSection>
      <StyledProductSection ref={productSectionTriggerRef}>
        <div ref={productWrapperRef} className="product__wrapper">
          <div ref={boxTextRef} className="product__text__left">
            <p>CLEAN & PURE</p>
            <p>Cleansing Foam</p>
          </div>
          <div ref={boxRef} className="product-image product1">
            <img className="product1-img-behind" src={box} alt="" />
          </div>
          <div ref={nightCreamRef} className="product-image product2">
            <img src={nightCream} alt="" />
          </div>
          <div ref={dayCreamRef} className="product-image product3 ghost">
            <img src={dayCream} alt="" />
          </div>
          <div ref={nightAndDayCreamTextRef} className="product__text__right">
            <p>ACTIVE</p>
            <p>Day & Night cream</p>
          </div>
        </div>
      </StyledProductSection>
    </>
  );
}

export default ProductSection;
