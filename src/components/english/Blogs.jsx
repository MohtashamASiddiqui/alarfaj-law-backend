import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import style from "./blogs.css";

const RecordDetails = () => {
  const { category, slug } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    // Fetch the record details based on the category and slug
    fetch(`https://www.arfajlaw.site/api/read/${category}/${slug}`)
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((error) => console.error("Error fetching record details:", error));
  }, [category, slug]);

  if (!record) {
    return <p>Loading...</p>;
  }

  // Computed properties for generating LinkedIn and Twitter share links
  const linkedin = () => {
    return `https://www.linkedin.com/shareArticle/?mini=true&url=${record.url}&slug=${record.slug}&summary=${record.summary}&source=ArfajLaw`;
  };

  const twitter = () => {
    return `https://www.twitter.com/intent/tweet?text=${record.slug}%0D${record.url}`;
  };

  return (
    <div className="news">
      <div className="news-main">
        <h2 className="news-title">{record.title}</h2>
        <div className="news-link">
          <div className="news-links1">
            {" "}
            {Array.isArray(record.person) && record.person.length > 0 && (
              <ul className="news-ul">
                {record.person.map(
                  (per, index) =>
                    per && (
                      <li key={index} className="news-li">
                        {per}
                      </li>
                    )
                )}
              </ul>
            )}
            <div className="news-link-con">
              <a href={linkedin()} className="news-icon">
                <Icon icon="mdi-linkedin"></Icon>
              </a>
              <a href={twitter()} className="news-icon">
                <Icon icon="fa6-brands:square-x-twitter"></Icon>
              </a>
            </div>
          </div>
          <div className="news-link2">
            {/* <p>Category: {record.category}</p> */}
            <p> {record.date}</p>
          </div>
        </div>
        <div
          className="news-para"
          dangerouslySetInnerHTML={{ __html: record.sanitizedHtml }}
        ></div>

        {/* Render download button if there's a file */}

        {record.file && (
          <button className="custom-button">
            <a
              className="news-file"
              href={`https://www.arfajlaw.site/${record.file}`}
              download
            >
              Download
            </a>{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default RecordDetails;
