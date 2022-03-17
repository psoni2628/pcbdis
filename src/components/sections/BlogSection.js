import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
// import BlogPost from "../../components/sections/partials/BlogPost";

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

  const lastUpdated = "March 18, 2022";

  // Blog post 1
  const date1 = "Week 1-2 (January 3 - January 14, 2022)";

  // Blog post 2
  const date2 = "Week 3-4 (January 17 - January 28, 2022)";

  // Blog post 3
  const date3 = "Week 5-9 (February 1 - March 4, 2022)";

  // Blog post 4
  const date4 = "Week 10-11 (March 7 - March 18, 2022)";

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
            {/* BLOG POST 4 */}
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <h3>{date4}</h3>
              <h4>1 - Status Update</h4>
              These past two weeks have been dedicated to preparing for the
              final demo, as well as the symposium. All components have been
              purchased or fabricated, now it is about perfecting the software
              and hardware to work in harmony.
              <h4>2 - Final Demo</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/lE7puqEFnHQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            {/* BLOG POST 3 */}
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <h3>{date3}</h3>
              <h4>1 - Status Update</h4>
              <h5>Purchasing</h5>
              <ul>
                <li>
                  All components have been purchased / fabricated and integrated
                  into the device
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log3/purchasing-log3.png")}
                  width={600}
                />
              </div>
              <h4>2 - Demo</h4>
              Heating Issues
              <ul>
                <li>
                  One of the major roadblocks that the team encountered as we
                  transitioned from testing the desoldering (heating element)
                  directly on top of the hot plate into the larger frame was
                  that we were not able to sustain the same temperatures
                </li>
                <li>
                  This was likely being caused by heating leakage from the
                  perforated platform to the steel platform
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log3/demo-1.png")}
                  width={600}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log3/demo-2.png")}
                  width={600}
                />
              </div>
              Insulated Perforated Platform
              <ul>
                <li>
                  One solution that the group explored was switching to a
                  smaller perforated platform and insulating it with a foam
                  border
                </li>
                <li>
                  This would prevent heat from leaking into the steel platform
                  and the rest of the frame
                </li>
                <li>
                  Unfortunately, the two ran into two major issues
                  <ul>
                    <li>
                      The foam is extremely fragile and would not survive during
                      any sort of transportation of the device
                    </li>
                    <li>
                      The foam has a ridged surface which could cause parts to
                      get stuck as they are actuated across its top surface in
                      the stencil
                    </li>
                  </ul>
                </li>
              </ul>
              Fastening Items
              <ul>
                <li>
                  As a part of integrating components, one of the tasks is
                  physically fastening them to the base of the device
                </li>
                <li>
                  Initially the components were taped down in the locations
                  shown below
                </li>
                <li>
                  The tape will be replaced with bolts and zip ties as wire
                  lengths are trimmed and locations are finalized upon
                  successful operation of the entire system
                </li>
              </ul>
              Component Dropping
              <ul>
                <li>
                  An initial program was written in C++ for the Arduino upon
                  determining locations of each of the component slots on the
                  stencil
                </li>
                <li>
                  These locations were used to drop pre-loaded components on the
                  stencil through the drop slot
                </li>
                <li>
                  Limit switches are used to define a “home position” for the
                  stencil
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8SGhOtnjwuc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              Component Sorting
              <ul>
                <li>
                  A secondary program was created to identify positions of the
                  rotary bin mechanisms that would line would the drop slot in
                  the platform above
                </li>
                <li>
                  In addition, a limit switch was used to mitigate a dependence
                  on hard-coded positions and to counteract issues such as drift
                  due to things such as play in the motor mount
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/etj6osoc3yY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <h4>3 - Questions</h4>
              <ul>
                <li>What is the dress code for the symposium?</li>
                <li>
                  What is the schedule for the symposium? Do all team members
                  have to be present at all times?
                </li>
                <li>How many rounds of judging will there be?</li>
              </ul>
            </div>
            {/* BLOG POST 2 */}
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <h3>{date2}</h3>
              <h4>1 - Status Update</h4>
              <h5>Purchasing</h5>
              <ul>
                <li>Nearly all components have been purchased / fabricated</li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log2/purchasing-log2.png")}
                  width={600}
                />
              </div>
              <h5>Website</h5>
              <ul>
                <li>
                  Website domain has been purchased using namecheap:{" "}
                  <a href="https://pcbdis.me">pcbdis.me</a>
                </li>
                <li>GitHub Pages being used to host the website</li>
                <li>
                  Using a React template, currently in the process of populating
                  the fields
                </li>
              </ul>
              <h4>2 - Mini Demo</h4>
              2-Axis machine
              <ul>
                <li>
                  Initially had issues with the machine jamming using the
                  provided motor drivers
                </li>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "25px",
                  }}
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/a1QU-87WyUU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <li>
                  Swapped out the stepper motor drives to ones purchased on
                  Amazon, tightened the belts, and used a stepper motor library
                  found called “Accel Stepper” for Arduino - the machine began
                  actuating as expected
                </li>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "25px",
                  }}
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/K-zlBo6YSsE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </ul>
              Hot Plate Heating Element
              <ul>
                <li>
                  Initially had some trouble sufficiently heating the components
                  on the PCB
                </li>
                <li>
                  Leaded solder has a melting point of ~180°C, non-leaded solder
                  (used by our board house) has a melting point of ~230°C so it
                  takes a while for the heating element to reach the required
                  temperature
                </li>
                <ul>
                  <li>
                    Testing was done by placing the PCB directly on top of the
                    hot plate
                  </li>
                  <li>
                    Once this temperature is reached, the solder melts and
                    components can be freely moved
                  </li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "25px",
                  }}
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CkEdmY-8mwg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </ul>
              Stencil
              <ul>
                <li>
                  More advanced testing was conducted by heating the PCB while
                  placed in the stencil (as our design intends)
                  <ul>
                    <li>
                      All components were sufficiently heated and the PCB board
                      could be slid away from the desoldered components
                    </li>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "25px",
                      }}
                    >
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/16pmuelQQ5k"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <li>Residual solder dripped into the perforated tray</li>
                  </ul>
                </li>
              </ul>
              Sorting mechanism rotary motor
              <ul>
                <li>
                  3D printed the sorting mechanism tray and tested fit with the
                  motor
                </li>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "25px",
                  }}
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/eT3jsoCC-Nw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </ul>
              <h4>3 - Questions</h4>
              <ul>
                <li>
                  Can the demo be a pre-recorded video? It takes a while for the
                  hot plate to heat up and live streaming via our laptop's
                  webcam can be difficult.
                </li>
              </ul>
            </div>
            {/* BLOG POST 1 */}
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <h3>{date1}</h3>
              <h4>1 - Introduction</h4>
              <p>
                In 2020 alone, over 53.6 million tonnes of used electronics were
                thrown away as e-waste which is the equivalent to the weight of
                350 cruise ships. Moreover, only 17.4% of this waste was
                formally recycled. The main goal of the project is to design and
                build a machine that can desolder a used PCB in order to remove
                and sort as many microelectronic components as possible
                including resistors, transistors and larger ICs. This is
                ultimately to reduce the e-waste directly and indirectly caused
                by the lack of PCB recycling.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log1/cad-pic1-log1.png")}
                  width={500}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log1/cad-pic2-log1.png")}
                  width={500}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log1/team-log1.png")}
                  width={600}
                />
              </div>
              <h4>2 - Status Update</h4>
              <h5>Purchasing</h5>
              <ul>
                <li>
                  Vast majority of parts were ordered before the Winter break
                  and have arrived
                </li>
                <li>
                  Drawings for the metal frame are complete, to be submitted to
                  WATiMake by Wednesday
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log1/component-list-log1.png")}
                  width={600}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log1/component-pics-log1.png")}
                  width={600}
                />
              </div>
              <h5>Website</h5>
              <ul>
                <li>
                  Template selected, content being written, domain name in the
                  process of being finalized
                </li>
                <li>Hosting through GitHub Pages</li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/log1/website-log1.png")}
                  width={600}
                />
              </div>
              <h4>3 - Questions</h4>
              <ul>
                <li>
                  Feasibility of assembling during COVID
                  <ul>
                    <li>
                      Vishvam is currently COVID-positive and the team is
                      scattered across the GTA
                    </li>
                  </ul>
                </li>
                <li>
                  Verifying Level of Functionality
                  <ul>
                    <li>
                      This being an initial prototype, there is some concerns
                      about all of the features being functioning as anticipated
                      <ul>
                        <li>
                          i.e. the heating element may take longer than
                          anticipated
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Safety
                  <ul>
                    <li>
                      Implications of using the heating element
                      <ul>
                        <li>
                          Do we need special guarding, would this alone
                          necessitate CSA inspection
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogSection.propTypes = propTypes;
BlogSection.defaultProps = defaultProps;

export default BlogSection;
