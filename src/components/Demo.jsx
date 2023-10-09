import React from "react";
import storyOne from "../assets/story-image-one.png";
import storyTwo from "../assets/story-image-two.png";
import rectangle18 from "../assets/rectangle_18.png";
import vlogUp from "../assets/vlog-up.png";
import MainNav from "./MainNav";
import "./Demo.css";
const Demo = () => {
  return (
    <div id="about" className="main-demo-container demo-section">
      <div className="sub-nav">
        <MainNav color="black" />
      </div>
      <div className="demo-container">
        <div className="demo-header">
          <h1>The Travel XP Journey</h1>
          <div className="yellow-container">
            <img src={vlogUp} alt="" />
          </div>
          <div>
            <p>This is To The People Who Loves To See The True Beauty</p>
          </div>
        </div>

        <div className="demo-body">
          <img src={rectangle18} alt="" className="demo-body-img" />
          <div>
            <div className="demo-body-desc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                aut maxime quaerat quod tempora aliquam, labore eaque, eum
                similique vero, veniam molestias aspernatur sunt atque eveniet
                at quia iste numquam.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="story">
            <div className="story-image-container">
              <img src={storyOne} alt="" />
              <img src={storyTwo} alt="" />
            </div>
            <p className="story-heading">Our Story</p>
            <p className="story-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur rem perferendis quaerat excepturi accusamus quae
              tenetur, soluta mollitia architecto optio ipsum laboriosam ab
              culpa, eos distinctio praesentium eaque. Minus, modi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
