import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import aboutData from "../data/aboutData";

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
            {aboutData.map(
              ({ id, imageUrl, personImage, likes, dislikes, content }) => (
                <motion.div className="item" key={id}>
                  <img
                    src={imageUrl}
                    alt="travelImage"
                    className="item-img-tag"
                  />
                  <div className="comments-card">
                    <div className="card-image-container">
                      <div className="card-image-inner-container">
                        <img
                          src={personImage}
                          alt="profile"
                          className="card-image-tag"
                        />
                      </div>
                    </div>
                    <div style={{ width: "70%" }}>
                      <div style={{ height: "65%" }}>{content}</div>
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
                            {likes}
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
                            {dislikes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
