import React from "react";
import { SectionProps } from "../../../utils/SectionProps";
import Image from "../../elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Member = ({ name, description, file, ...props }) => {
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
            <h3>{name}</h3>
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
