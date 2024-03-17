import React from "react";
import About from "./About.jsx";
import Blog from "./Blog.jsx";
import Expertise from "./Expertise.jsx";
import People from "./People.jsx";
import Link from "./Link.jsx";
import style from "./main.css";
import phoneIcon from "@iconify/icons-mdi/phone";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import emailIcon from "@iconify/icons-mdi/email";
import mapIcon from "@iconify/icons-mdi/map";
import twitterIcon from "@iconify/icons-mdi/twitter";

const Home = () => {
  return (
    <>
      <div className="home-con rtl">
        <p className="home-text ">عملاؤنا شركاؤنا ونجاحهم نجاحنا</p>
      </div>
      <About />
      <Blog />
      <Expertise
        expertise={[
          {
            title: "الشركات والاندماج والاستحواذ",
            icon: "fa-solid:briefcase",
            description:
              "عمليات الاندماج والاستحواذ العامة والخاصة، والمشاريع المشتركة، والاستثمار الأجنبي، والشركات الناشئة، وإعادة هيكلة الشركات وحوكمة الشركات.",
          },
          {
            title: "أسواق المال",
            icon: "mdi:finance",
            description:
              "الاكتتابات العامة الأولية، واكتتابات حقوق الأولوية، والاكتتابات الثانوية أو الموازية، والاكتتابات الخاصة، والصناديق، والصكوك، وعمليات الاندماج والاستحواذ العامة.",
          },
          {
            title: "الطاقة",
            icon: "mdi:atom",
            description:
              "مشاريع الطاقة النووية، ومشاريع الطاقة المتجددة، ومشاريع البتروكيماويات، ومشاريع النفط والغاز.",
          },
          {
            title: "الأنظمة التجارية والعمالية",
            icon: "bx:bxs-briefcase-alt",
            description:
              "الاتفاقيات التجارية والاستشارات النظامية والمسائل المتعلقة بأنظمة العمل والموارد البشرية.",
          },
          {
            title: "التقاضي وتسوية المنازعات ",
            icon: "clarity:balance-line",
            description:
              "الترافع أمام الجهات القضائية واللجان شبه القضائية والتحكيم وغيرها من الطرق البديلة لتسوية المنازعات.",
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
