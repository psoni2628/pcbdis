import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const AboutSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} /*className={outerClasses}*/>
      <div className="container-sm">
        <div className={innerClasses}>
          <div
            className="reveal-from-bottom"
            data-reveal-delay="200"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2>About the project.</h2>
          </div>
          <div
            className="reveal-from-bottom"
            data-reveal-delay="400"
            style={{ textAlign: "center" }}
          >
            <p>
              In 2020, over 53.6 million tonnes of e-waste was produced and only
              17.4% of this was formally recycled.
            </p>
            <p>
              The main goal of our project is to design and build a machine that
              can desolder a used PCB in order to remove and sort as many
              microelectronic components as possible including resistors,
              transistors and larger ICs. We aim to ultimately to reduce the
              e-waste directly and indirectly caused by the lack of PCB
              recycling.
            </p>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            data-reveal-delay="800"
            className="hero-figure reveal-from-bottom illustration-element-01"
          >
            <Image
              className="has-shadow"
              src={require("./../../assets/images/log1/cad-pic2-log1.png")}
              alt="About"
              width="100%"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
            data-reveal-delay="400"
            className="hero-figure reveal-from-bottom illustration-element-01"
          >
            <Image
              className="has-shadow"
              src={require("./../../assets/images/poster.png")}
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = propTypes;
AboutSection.defaultProps = defaultProps;

export default AboutSection;
