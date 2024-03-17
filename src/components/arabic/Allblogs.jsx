import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch the latest records from the API
    fetch("https://www.arfajlaw.site/api/arabic/read")
      .then((response) => response.json())
      .then((data) => {
        // Sort the data in descending order based on date
        const sortedData = data.sort(
          (a, b) => new Date(b.dateEn) - new Date(a.dateEn)
        );
        // Set the fetched records to state
        setRecords(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id="blog " className="rtl">
      <h1 className="blog-heading"> أخبار ومقالات</h1>
      <hr />
      <div className="blog">
        {records.map((record) => (
          <Link
            to={`/ar/${record.urlCategory}/${record.url}`}
            key={record._id}
            className="record-link"
          >
            <div className="blog-column">
              <div className="blog-top">
                <div className="blog-category">{record.category}</div>
                <p className="arabic-blog-title">{record.title}</p>
                <p className="arabic-blog-date">{record.date}</p>
              </div>
              <p className="blog-preview">{record.preview}</p>
              <p className="blog-link">Read more</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestRecords;
