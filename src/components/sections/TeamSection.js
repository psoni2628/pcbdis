import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Member from "./partials/Member";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const TeamSection = ({
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

  const PrabDesc = "he's a cool dude.";
  const MattDesc = "josie got a phat ath.";
  const AggashDesc = "apple incoming, watch out tim.";
  const VishvamDesc = "meh.";
  const VishwaDesc = "he's the best.";

  return (
    <>
      <section {...props}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div
              className="reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <h2>Meet the team.</h2>
            </div>
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <Member
                name="Prabhdeep Soni"
                description={PrabDesc}
                file="Prabhdeep_Soni_Automated PCB Disassembler.jpg"
                linkedin="https://www.linkedin.com/in/prabhdeepsoni/"
              />
              <Member
                name="Matthew Yuen"
                description={MattDesc}
                file="Matthew_Yuen_Automated PCB Disassembler.jpg"
                linkedin="https://www.linkedin.com/in/matt-yuen/"
              />
              <Member
                name="Aggash Sivasothy"
                description={AggashDesc}
                file="Aggash_Sivasothy_Automated PCB Disassembler.jpg"
                linkedin="https://www.linkedin.com/in/aggashs/"
              />
              <Member
                name="Vishvam Mazumdar"
                description={VishvamDesc}
                file="Vishvam_Mazumdar_Automated PCB Disassembler.jpg"
                linkedin="https://www.linkedin.com/in/vishvam-mazumdar/"
              />
              <Member
                name="Vishwa Sheth"
                description={VishwaDesc}
                file="Vishwa_Sheth_Automated PCB Disassembler.jpg"
                linkedin="https://www.linkedin.com/in/vishwasheth03/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

TeamSection.propTypes = propTypes;
TeamSection.defaultProps = defaultProps;

export default TeamSection;
