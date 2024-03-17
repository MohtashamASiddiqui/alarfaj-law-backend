import React from "react";
import { Icon } from "@iconify/react";

const YourComponent = ({ people }) => {
  return (
    <div className="link-container" id="contact">
      <div className="link-row">
        {people.map((person, index) => (
          <div key={index} className="link-con">
            <a href={person.link}>
              <button className="link-button" aria-label={person.title}>
                <Icon icon={person.icon} className="link-icon" />
              </button>
              <p className="link-para">{person.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
