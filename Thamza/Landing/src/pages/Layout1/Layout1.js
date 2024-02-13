import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar/NavBar";
import Section from "./Section";
import Services from "../../component/Services";
// import Pricing from "../../component/Pricing";
import Team from "../../component/Team";
import Clients from "../../component/Clients";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

const Layout1 = () => {
  const [navItems] = useState([
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 3, idnm: "services", navheading: "Offers" },
    // { id: 4, idnm: "pricing", navheading: "Pricing" },
    { id: 5, idnm: "team", navheading: "Team" },
    { id: 6, idnm: "clients", navheading: "Clients" },
    { id: 7, idnm: "contact", navheading: "Contact" },
  
  ]);

  const [pos, setPos] = useState(document.documentElement.scrollTop);
  const [imglight, setImgLight] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [fixTop] = useState(true);

  useEffect(() => {
    const scrollNavigation = () => {
      var scrollup = document.documentElement.scrollTop;
      if (scrollup > pos) {
        setNavClass("nav-sticky");
        setImgLight(false);
      } else {
        setNavClass("");
        setImgLight(false);
      }
      setPos(scrollup);
    };

    window.addEventListener("scroll", scrollNavigation, true);

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, [pos]);

  return (
    <React.Fragment>
      {/* Importing Navbar */}
      <Navbar
        navItems={navItems}
        navClass={navClass}
        imglight={imglight}
        top={fixTop}
      />

      {/* Importing Section */}
      <Section />

      {/* Importing Service */}
      <Services />

      {/* Importing Pricing */}
      {/* <Pricing /> */}

      {/* Importing Team */}
      <Team />

      {/* Importing Clients */}
      <Clients />

      {/* Importing Contact Us */}
      <Contact />

      {/* Importing Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Layout1;
