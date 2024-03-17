import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const PersonDetails = () => {
  const { url } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const response = await fetch(
          `https://www.arfajlaw.site/api/peopleArabic/read/${url}`
        );

        const data = await response.json();
        setPerson(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching person details:", error);
      }
    };

    fetchPersonDetails();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!person) {
    return <p>Person not found</p>;
  }

  return (
    <div className="peoples rtl">
      <div className="person-details">
        <div className="person-con">
          <div className="person-second-con">
            {person.photo && (
              <img
                src={`https://www.arfajlaw.site/uploads/${person.photo}`}
                alt={person.name}
                className="person-image-2"
              />
            )}
            <div className="icon-con">
              <Icon icon="mdi:circle-small" className="icon-peoples" />
              <Icon icon="mdi:circle-medium" className="icon-peoples" />
              <Icon icon="mdi:circle-medium" className="icon-peoples" />
              <Icon icon="mdi:circle-medium" className="icon-peoples" />
              <Icon icon="mdi:circle-small" className="icon-peoples" />
            </div>
            <h2 className="peoples-title">{person.name}</h2>
            <p className="peoples-position">{person.position}</p>
          </div>
          <div className="person-second-con2 ltr">
            <div>
              <p className="peoples-link">
                <Icon icon="mdi-email" className="peoples-icon"></Icon>
                <a className="people-link" href={`mailto:${person.email}`}>
                  {person.email}
                </a>{" "}
              </p>
              <p className="peoples-link">
                {" "}
                <Icon icon="mdi-cellphone" className="peoples-icon"></Icon>
                {person.saudiNumber}
              </p>
              <p className="peoples-link">
                {" "}
                <Icon icon="mdi-cellphone" className="peoples-icon"></Icon>
                {person.internationalNumber}
              </p>
              <p className="peoples-link">
                {" "}
                <Icon icon="mdi-linkedin" className="peoples-icon"></Icon>
                <a
                  href={`https://www.linkedin.com${person.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="people-link"
                >
                  {person.linkedin}
                </a>
              </p>
              <p className="peoples-link">
                <Icon
                  icon="line-md:twitter-x-alt"
                  className="peoples-icon"
                ></Icon>
                <a
                  className="people-link"
                  href={person.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {person.twitter}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="person-con2">
          <pre
            className="person-con2-description"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {person.description}
          </pre>

          <h3 className="people-con2-title">المؤهلات الأكاديمية:</h3>
          {Array.isArray(person.education) && person.education.length > 0 && (
            <ul className="peoples-ul">
              {person.education.map(
                (edu, index) =>
                  edu && (
                    <li key={index} className="peoples-li">
                      {edu}
                    </li>
                  )
              )}
            </ul>
          )}

          <h3 className="people-con2-title">تراخيص ممارسة المحاماة:</h3>
          {Array.isArray(person.admission) && person.admission.length > 0 && (
            <ul className="peoples-ul">
              {person.admission.map(
                (adm, index) =>
                  adm && (
                    <li key={index} className="peoples-li">
                      {adm}
                    </li>
                  ) // Add a check for truthiness before rendering <li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
