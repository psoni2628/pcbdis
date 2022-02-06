import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import BlogPost from "../../components/sections/partials/BlogPost";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const BlogSection = ({
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

  const lastUpdated = "February 5, 2022";

  // Blog post 1
  const date1 = "Week 1-2 (January 3 - January 14, 2022)";
  const desc1 =
    "ordered subcomponent parts, designed and ordered PCBs, designed CADs and 3D designs for parts.";

  // Blog post 2
  const date2 = "Week 3-4 (January 17 - January 28, 2022)";
  const desc2 =
    "started building subcomponents, getting parts machined and 3D printed.";

  return (
    <>
      <div className="container-sm">
        <div className={innerClasses}>
          <div>
            <div
              className="reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <h2>Blog.</h2>
            </div>
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <h6>Updated: {lastUpdated}</h6>
            </div>
            <BlogPost
              date={date2}
              desc={desc2}
              className="reveal-from-bottom"
              dataRevealDelay="200"
            />
            <BlogPost
              date={date1}
              desc={desc1}
              className="reveal-from-bottom"
              dataRevealDelay="400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

BlogSection.propTypes = propTypes;
BlogSection.defaultProps = defaultProps;

export default BlogSection;
