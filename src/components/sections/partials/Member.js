import React from "react";
import { SectionProps } from "../../../utils/SectionProps";
import Image from "../../elements/Image";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Member = ({ name, description, file, linkedin, ...props }) => {
  return (
    <>
      <section {...props}>
        <div style={{ display: "flex", marginBottom: "50px" }}>
          <Image
            className="has-shadow"
            src={require(`./../../../assets/images/${file}`)}
            alt="About"
            //   width={500}
            style={{
              borderRadius: "50%",
              width: 200,
              height: 200,
            }}
          />
          <div style={{ marginLeft: "1rem" }}>
            <div style={{ display: "flex" }}>
              <h3>{name}</h3>
              <a href={linkedin}>
                <Image
                  src={require("./../../../assets/images/linkedin-logo.png")}
                  style={{
                    height: 25,
                    width: 25,
                    marginTop: 44,
                    marginLeft: 20,
                  }}
                />
              </a>
            </div>

            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

Member.propTypes = propTypes;
Member.defaultProps = defaultProps;

export default Member;
