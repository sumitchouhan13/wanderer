import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import image1 from "../images/pexels-bhawani-shankar-kumawat-4023930.jpg";
import image2 from "../images/pexels-bhumik-photography-5621421.jpg";
import image3 from "../images/pexels-parv-choudhary-2870167.jpg";
import profile from "../images/random_people.jpg";

function About() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div id="about" className="about-main-container">
      <div className="about-main-container-heading">Reviews of Wanderers</div>
      <div className="about-main-container-images">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            <motion.div className="item">
              <img src={image1} alt="travelImage" className="item-img-tag" />
              <div className="comments-card">
                <div className="card-image-container">
                  <div className="card-image-inner-container">
                    <img
                      src={profile}
                      alt="profile"
                      className="card-image-tag"
                    />
                  </div>
                </div>
                <div style={{ width: "70%" }}>
                  <div style={{ height: "65%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    .
                  </div>
                  <div style={{ height: "35%", display: "flex" }}>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiLike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        234
                      </div>
                    </div>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiDislike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        123
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="item">
              <img src={image2} alt="travelImage" className="item-img-tag" />
              <div className="comments-card">
                <div className="card-image-container">
                  <div className="card-image-inner-container">
                    <img
                      src={profile}
                      alt="profile"
                      className="card-image-tag"
                    />
                  </div>
                </div>
                <div style={{ width: "70%" }}>
                  <div style={{ height: "65%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    .
                  </div>
                  <div style={{ height: "35%", display: "flex" }}>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiLike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        234
                      </div>
                    </div>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiDislike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        123
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="item">
              <img src={image3} alt="travelImage" className="item-img-tag" />
              <div className="comments-card">
                <div className="card-image-container">
                  <div className="card-image-inner-container">
                    <img
                      src={profile}
                      alt="profile"
                      className="card-image-tag"
                    />
                  </div>
                </div>
                <div style={{ width: "70%" }}>
                  <div style={{ height: "65%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    .
                  </div>
                  <div style={{ height: "35%", display: "flex" }}>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiLike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        234
                      </div>
                    </div>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiDislike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        123
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="item">
              <img src={image1} alt="travelImage" className="item-img-tag" />
              <div className="comments-card">
                <div className="card-image-container">
                  <div className="card-image-inner-container">
                    <img
                      src={profile}
                      alt="profile"
                      className="card-image-tag"
                    />
                  </div>
                </div>
                <div style={{ width: "70%" }}>
                  <div style={{ height: "65%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    .
                  </div>
                  <div style={{ height: "35%", display: "flex" }}>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiLike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        234
                      </div>
                    </div>
                    <div style={{ width: "50%", display: "flex" }}>
                      <BiDislike
                        size={25}
                        color="inherit"
                        style={{ width: "20%" }}
                      />
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10%",
                        }}
                      >
                        123
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
