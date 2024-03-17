import React from "react";
import { Icon } from "@iconify/react";

const Expertise = ({ title, caption, expertise }) => {
  return (
    <>
      <div className="expertise" id="expertise">
        <h1 className="expertise-title">Our Expertise</h1>
        <div className="expertise-main">
          {/* Mapping over expertise array to render each expertise */}
          {expertise.map((item, index) => (
            <div className="expertise-con" key={index}>
              <Icon className="expertise-icon" icon={item.icon} />
              <h3 className="expertise-heading">{item.title}</h3>
              {/* Rendering icons using @iconify/react */}
              <p className="expertise-para">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Expertise;
