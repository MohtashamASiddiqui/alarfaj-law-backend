import React from "react";
import About from "./About.jsx";
import Blog from "./Blog.jsx";
import Expertise from "./Expertise.jsx";
import People from "./People.jsx";
import Link from "./Link.jsx";
import phoneIcon from "@iconify/icons-mdi/phone";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import emailIcon from "@iconify/icons-mdi/email";
import mapIcon from "@iconify/icons-mdi/map";
import twitterIcon from "@iconify/icons-mdi/twitter";

const Home = () => {
  return (
    <>
      <div className="home-con">
        <p className="home-text">
          OUR CLIENTS ARE OUR PARTNERS AND THEIR SUCCESS IS OURS
        </p>
      </div>
      <About />
      <Blog />
      <Expertise
        expertise={[
          {
            title: "Corporate and M&A",
            icon: "fa-solid:briefcase",
            description:
              "public and private M&A, joint ventures, foreign investment, startups, corporate restructurings and corporate governance.",
          },
          {
            title: "Capital Markets",
            icon: "mdi:finance",
            description:
              "initial public offerings, rights issues, secondary offerings, private placements, funds, sukuk, and public M&A.",
          },
          {
            title: "Energy",
            icon: "mdi:atom",
            description:
              "nuclear energy projects, renewable energy projects, petrochemicals projects as well as downstream and upstream oil and gas projects.",
          },
          {
            title: "Commercial and Employment",
            icon: "bx:bxs-briefcase-alt",
            description:
              "various commercial agreements, regulatory compliance and employment related issues.",
          },
          {
            title: "Litigation & Dispute Resolution ",
            icon: "clarity:balance-line",
            description:
              "complex civil litigation, arbitration and other alternative dispute resolution.",
          },
        ]}
      />
      <People />
      <Link
        people={[
          {
            icon: "line-md:twitter-x-alt",
            title: "@ArfajLaw",
            link: "https://twitter.com/arfajlaw",
          },
          {
            icon: phoneIcon,
            title: "+966 112 173 477",
            link: "tel:+966112173477",
          },
          {
            icon: linkedinIcon,
            title: "ArfajLaw",
            link: "https://www.linkedin.com/company/arfajlaw",
          },
          {
            icon: emailIcon,
            title: "Info@ArfajLaw.com",
            link: "mailto:info@ArfajLaw.com",
          },
          {
            icon: mapIcon,
            title: "Location",
            link: "https://goo.gl/maps/MyfssuGGsPv8E4oB7",
          },
        ]}
      />
    </>
  );
};

export default Home;
