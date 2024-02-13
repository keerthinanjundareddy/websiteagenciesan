import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import HomeUrl from '../assets/images/home-border.png';

const Services = () => {
  const [offers, setOffers] = useState([]);
  const [digitalMarketingOffers, setDigitalMarketingOffers] = useState([]);

  const baseUrl = 'https://strapi.ayatana.world';
  // const baseUrltwo='http://localhost:4000'
  useEffect(() => {
    // Fetch data from the API
    axios.get(`${baseUrl}/api/WebsiteoffersBrandStrategy?locale=undefined&draft=false&depth=2`)
      .then((response) => {
        console.log("websiteOffer",response)
        setOffers(response.data.docs);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      axios.get(`${baseUrl}/api/WebsiteoffersDigitalMarketing?locale=undefined&draft=false&depth=2`)
      .then((response) => {
        console.log("Marketingdataresponse",response.data.docs)
        setDigitalMarketingOffers(response.data.docs);
       
      })
      .catch((error) => {
        console.error("Error fetching digital marketing data:", error);
      });


  }, []);

  return (
    <React.Fragment>
      <section className="section bg-serv" id="services">
       




{/* brand content */}

<Container>
          {offers && offers.map((offer) => (
            <div key={offer.id} >
              <Row>
                <Col lg="12">
                   <div className="title-box text-center">
                    <h3 className="title-heading mt-4">{offer.Heading && offer.Heading}</h3>
                    <p className="text-muted f-17 mt-3" style={{textTransform:"uppercase"}}>{offer.Description && offer.Description}</p>
                    {offer.Heading && (
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />
                    )}
                  </div> 
                </Col>
              </Row>
              <Row >
                {offer.WebsiteofferBrandStrategycard && offer.WebsiteofferBrandStrategycard.map((card) => (
                  <Col lg={4} key={card.id} style={{display:"flex",flexWrap:"wrap"}}>
                    
                    <div className="services-box p-4 mt-4" style={{ minHeight: "20px",minWidth: "100px", width: "100%" }}>
                     
                    
                      {card.Icon && 
                       <div className="services-icons bg-soft-primary" style={{width:"80px",height:"80px",textAlign:"center"}}>
                      <div style={{ width: "100%", height: "100%",textAlign:"center",objectFit:"contain"}}>
                        {/* src={`${baseUrl}${socialMedia.socialMediaImage.url}`} */}
                           <img src={card.Icon.url}  alt={card.AlternativeTextOfIcon || "Icon"} style={{ width:"100%",height:"100%",objectFit:"contain",padding:"10px",color:"white" }} />
                      {/* <img src={`${baseUrl}${card.Icon.url}`}  alt={card.AlternativeTextOfIcon || "Icon"} style={{ width:"100%",height:"100%",objectFit:"contain",padding:"10px",color:"white" }} /> */}
                     
                      </div>
                      </div>
                      }

                     
                      <h5 className="mt-4">{card.Heading}</h5>
                      <p className="text-muted f-17 mt-3">{card.Description}</p>
                      {/* <div className="mt-3">
                        <a href="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></a>
                      </div> */}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>

        

        
{/* digital marketing section  */}
<Container style={{marginTop:"40px"}}>
{digitalMarketingOffers && digitalMarketingOffers.map((MarketingOffer) => (
    <div key={MarketingOffer.id}>
      <Row>
        <Col lg="12">
          <div className="title-box text-center">
            {/* Display the dynamic heading from the API response */}
            <h3 className="title-heading mt-4" style={{textTransform:"uppercase"}}>{MarketingOffer.Heading && MarketingOffer.Heading}</h3>
            {MarketingOffer.Heading && (
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />
                    )}
          </div>

          {/* <div className="title-box text-center">
                    <h3 className="title-heading mt-4">{offer.Heading && offer.Heading}</h3>
                    <p className="text-muted f-17 mt-3" style={{textTransform:"uppercase"}}>{offer.Description && offer.Description}</p>
                    {offer.Heading && (
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />
                    )}
                  </div>  */}



        </Col>
      </Row>
      <Row>
        {MarketingOffer.WebsiteoffersDigitalMarketingCard && MarketingOffer.WebsiteoffersDigitalMarketingCard.map((card) => (
          <Col lg={4} key={card.id} style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="services-box p-4 mt-4" style={{ minHeight: "20px", minWidth: "100px", width: "100%" }}>
            
                {card.images && (
                    // <div className="services-icons  bg-soft-primary" style={{ width: "100%", height: "200px" }}>
                  <div style={{ width: "100%", height:"200px", textAlign: "center" }}>
                 
                    <img src={`${card.images.url}`} alt={card.images.filename} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "10px" }} />
                  {/* </div> */}
                  </div>
                )}
             

              <h5 className="mt-4">{card.Heading}</h5>

{/* Map over the descriptions and render them */}
<div className="text-muted mt-3">
  {card.description && card.description.map((descItem) => (
    <ul key={descItem.id}>
      <li>{descItem.descriptiontexts}</li>
      </ul>
  ))}
</div>

            </div>
          </Col>
        ))}
      </Row>
    </div>
  ))}
</Container>



      </section>
    </React.Fragment>
  );
};

export default Services;