import React from "react";
import { SectionProps } from "../../../utils/SectionProps";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const BlogPost = ({
  date,
  desc,
  assets,
  className,
  dataRevealDelay,
  ...props
}) => {
  return (
    <div className={className} data-reveal-delay={dataRevealDelay}>
      <h3>{date}</h3>
      <p>{desc}</p>
    </div>
  );
};

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
