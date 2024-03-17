import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify/icons-mdi/arrow-left";
import arrowRight from "@iconify/icons-mdi/arrow-right";

const PersonCard = ({ person }) => {
  return (
    <Link to={`/team/${person.url}`} className="person-card-link">
      <div key={person._id} className="person-card">
        {person.photo && (
          <img
            src={`https://www.arfajlaw.site/uploads/${person.photo}`}
            alt={person.name}
            className="person-image"
          />
        )}
        <div className="icon-container">
          <Icon icon="mdi:circle-small" className="icon" />
          <Icon icon="mdi:circle-medium" className="icon" />
          <Icon icon="mdi:circle-medium" className="icon" />
          <Icon icon="mdi:circle-medium" className="icon" />
          <Icon icon="mdi:circle-small" className="icon" />
        </div>
        <h2 className="person-title">{person.name}</h2>
        <p className="person-position">{person.position}</p>
      </div>
    </Link>
  );
};

const YourComponent = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [containerClass, setContainerClass] = useState("person-container");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.arfajlaw.site/api/people/read"
        );
        const data = await response.json();
        setPeopleData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setContainerClass(
      peopleData.length < 3 ? "person-container center" : "person-container"
    );
  }, [peopleData]);

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex === peopleData.length - 1 ? 0 : prevIndex + 1;
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex === 0 ? peopleData.length - 1 : prevIndex - 1;
      return nextIndex;
    });
  };

  return (
    <div className="people-container" id="people">
      <h1 className="people-title">People</h1>
      {peopleData.length > 0 && (
        <div className={containerClass}>
          {peopleData.slice(startIndex, startIndex + 3).map((person, index) => (
            <PersonCard key={person._id} person={person} />
          ))}
          {/* Placeholder divs */}
          {peopleData.length < 3 &&
            Array.from({ length: 3 - peopleData.length }).map((_, index) => (
              <div key={index} className="placeholder"></div>
            ))}
        </div>
      )}
      {isLargeScreen && (
        <div className="slider-container">
          <button className="slider-button" onClick={handlePrev}>
            <Icon icon={arrowLeft} />
          </button>
          <button className="slider-button" onClick={handleNext}>
            <Icon icon={arrowRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
