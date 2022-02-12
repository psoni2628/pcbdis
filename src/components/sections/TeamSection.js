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

  const PrabDesc =
    "Prabhdeep is the Project Manager for this team. He is in charge of ensuring all deadlines are met, ensuring all submissions are of quality, and helping the team on any of the sub-teams as needed.";
  const MattDesc =
    "Matthew is the Software Lead for this team. This entails spearheading the code on which the 2-axis machine motors run as well as the sorting mechanism.";
  const AggashDesc =
    "Aggash takes charge as the Mechanical Lead for the team. This means making the CADs for each part to be machined, assembling the 2-axis mechanism, and helping build any other components.";
  const VishvamDesc =
    "Vishvam is the Electrical Lead. His job includes ensuring all electrical schematics are correct and implemented as is, and distributing enough power across the whole system.";
  const VishwaDesc =
    "Vishwa is the Integration Lead. This means he is in charge of bridging all sub-teams seamlessly, from mechanical to electrical to software. He also provides help on each sub-team as needed.";

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
