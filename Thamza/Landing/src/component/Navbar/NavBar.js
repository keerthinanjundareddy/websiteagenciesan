import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./Scrollspy";

import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import { useNavigate } from 'react-router-dom';

const NavbarPage = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoData, setLogoData] = useState(null);


    
  const navigate = useNavigate();
  const handleMoreClick = () => {
    // window.location.href = "/readmore";
   
 
  
  
    // Navigate to the "/readmore" path with additional details based on cardId
    navigate(`/shopify`);
  
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi.ayatana.world/api/websiteNavbarLogo?locale=undefined&draft=false&depth=1"
        );
        const data = await response.json();
        setLogoData(data.docs[0].navbarLogo);
      } catch (error) {
        console.error("Error fetching logo data:", error);
      }
    };

    fetchData();
  }, []);

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleNavLinkClick = (event, sectionID) => {
    event.preventDefault();

    const scrollTargetPosition =
      document.getElementById(sectionID).offsetTop -
      (props.headerBackground
        ? document.querySelector("div[data-nav='list']").scrollHeight
        : 0);
    window.scrollTo({
      top: scrollTargetPosition,
      behavior: "smooth",
    });

    console.log("Clicked NavLink for section:", sectionID);
    setActiveSection(sectionID);
  };

  const renderLogo = () => {
    if (!logoData) {
      return <div></div>;
    }

    const { filename, url } = logoData;
    const logoSource = `${url}`;
  

    return (
      <NavbarBrand className="navbar-brand logo text-uppercase" href="/">
        <div style={{ width: "200px", height: "100px" }}>
          <img
            src={logoSource}
            alt={filename}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </NavbarBrand>
    );
  };

  const { top, navClass, imglight, navItems } = props;
  let targetId = navItems.map((item) => item.idnm);

  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        fixed={top ? "top" : ""}
        className={`${navClass} navbar-custom sticky sticky-dark`}
        id="navbar"
      >
        <Container>
          {renderLogo()}
          <NavbarToggler onClick={toggle}>
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>
          <Collapse
            id="navbarCollapse"
            isOpen={isOpenMenu}
            className="navbar-collapse"
          >
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav className="navbar-nav ml-auto navbar-center" id="navbar-navlist">
                {navItems.map((item, key) => (
                  <NavItem key={key}>
                    <NavLink
                      className={activeSection === item.idnm ? "active" : ""}
                      href={`#${item.idnm}`}
                      onClick={(e) => handleNavLinkClick(e, item.idnm)}
                    >
                      {item.navheading}
                     
                    </NavLink>
                   
                  </NavItem>
                  
                ))}
                 <div className="shopify-text-heading" onClick={handleMoreClick}>Shopify</div>
              </Nav>


             
            </ScrollspyNav>
          </Collapse>
         
        </Container>
       
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarPage;
