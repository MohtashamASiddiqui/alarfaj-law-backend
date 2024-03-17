import React from "react";
import { Icon } from "@iconify/react";

const Expertise = ({ title, caption, expertise }) => {
  return (
    <>
      <div className="expertise rtl" id="expertise">
        <h1 className="arabic-weight expertise-title">خبراتنا</h1>
        <div className="expertise-main">
          {/* Mapping over expertise array to render each expertise */}
          {expertise.map((item, index) => (
            <div className="expertise-con" key={index}>
              <Icon className="expertise-icon" icon={item.icon} />
              <h3 className="expertise-heading  arabic-weight">{item.title}</h3>
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
