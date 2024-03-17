import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch the latest three records
    fetch("https://www.arfajlaw.site/api/read")
      .then((response) => response.json())
      .then((data) => {
        // Sort the data in descending order based on date
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Get the latest three records
        const latestRecords = sortedData.slice(0, 3);
        setRecords(latestRecords);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to truncate text to three lines
  const truncateText = (text) => {
    // Split text into lines
    const lines = text.split("\n");

    // Check if the text contains newline characters
    if (lines.length <= 1) {
      // If there are no newline characters, simply truncate the text
      return text.length > 100 ? text.slice(0, 180) + "..." : text;
    }

    // Join the first three lines and add ellipsis
    const truncatedText =
      lines.slice(0, 3).join("\n") + (lines.length > 3 ? "..." : "");
    return truncatedText;
  };

  return (
    <div id="news">
      <div className="blog-container">
        {records.map((record) => (
          <Link
            to={`/${record.category}/${record.slug}`}
            key={record._id}
            className="record-link"
          >
            <div className="blog-column column-blog">
              <div className="blog-top">
                <div className="blog-category">{record.category}</div>
                <p className="blog-title">{record.title}</p>
                <p className="blog-date">{record.date}</p>
              </div>
              {/* Truncate preview text to three lines */}
              <p className="blog-preview">
                {truncateText(record.preview)}
              </p>{" "}
              <p className="blog-link">Read more</p>
            </div>
          </Link>
        ))}
      </div>{" "}
      <div className="blog-view">
        <Link to="/all" className="blog-view-link">
          View all News and Insight
        </Link>
      </div>
    </div>
  );
};

export default LatestRecords;
