import React, { useState, useEffect } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://www.arfajlaw.site/api/about/read")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Replace '\n' with '<br>' in the 'about' field
        const formattedData = data.map((item) => ({
          ...item,
          about: item.about.replace(/\n/g, "<br>"),
        }));
        setAboutData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="about-container" id="about">
      <h1 className="about-heading">About Us</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div
          className="about-para"
          dangerouslySetInnerHTML={{ __html: aboutData[0].about }}
        />
      )}
    </div>
  );
};

export default About;
