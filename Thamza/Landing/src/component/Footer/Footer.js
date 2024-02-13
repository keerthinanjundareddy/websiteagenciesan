import React, { useEffect, useState } from 'react';
import { Container } from "reactstrap";
import '../../assets/css/Own.css';

function Footer() {
  const [footerData, setFooterData] = useState(null);
  const baseUrl = 'https://strapi.ayatana.world';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/WebsiteFooter/65671fce1995fefa36b9bfff?locale=undefined&draft=false&depth=1`);
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSocialMediaClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };
  
  return (
    <>
      <footer className="footersection bottom bg-footer ">
        <Container>
          <div className='footersection'>
            <div>
              {footerData && (
                <div style={{width:"150px",height:"100px"}}>
                  {footerData.websitelogo && (
                <img
                  src={`${footerData.websitelogo.url}`}
                  alt="Website Logo"
                 style={{width:"100%",height:"100%",objectFit:"contain"}}
                />
                )}
                </div>
              )}
            </div>
            <div style={{width:"120px",height:"120px"}} className='footersocialMediaicons'>
              {footerData && footerData.socilMediaIcons.map(icon => (
                <div >
                   {icon.socialMediaIcon && (
                <img
                  key={icon.id}
                  src={`${icon.socialMediaIcon.url}`}
                  alt="Social Media Icon"
                  style={{width:"100%",height:"100%",objectFit:"contain",cursor:"pointer"}}
                  onClick={() => handleSocialMediaClick(icon.socialMediaLink)}
                 
                />
                   )}
                </div>
              ))}
            </div>
          </div>
          <hr className="" />
          <div style={{ textAlign: "center" ,marginBottom:"20px",marginTop:"20px"}}>
            {footerData && footerData.footerBottomText}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
