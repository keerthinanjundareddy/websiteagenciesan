import React,{useState,useEffect}from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";
import HomeUrl from '../assets/images/home-border.png';
// import Img1 from '../assets/images/testi-img/img-1.png';
// import Img2 from '../assets/images/testi-img/img-2.png';
// import Img3 from '../assets/images/testi-img/img-3.png';
// import Img4 from '../assets/images/testi-img/img-4.png';
// import HomeUrl from '../assets/images/home-border.png';
// import Client1 from '../assets/images/clients/1.png';
// import Client2 from '../assets/images/clients/2.png';
// import Client3 from '../assets/images/clients/3.png';
// import Client4 from '../assets/images/clients/4.png';

const Clients = () => {

  const[clientData,setClientData]=useState([])
   const baseUrl = 'https://strapi.ayatana.world';
  // const baseUrltwo='http://localhost:4000'
  useEffect(() => {
    axios.get(`${baseUrl}/api/websiteClient`).then((response) => {
      setClientData(response.data.docs[0]);
      console.log("clientData", response.data.docs[0]);
      console.log("clientimage",response.data.docs[0].images.clientLogos)
    }).catch((error) => {
      console.error("Error fetching API data:", error);
    });
  }, []);
  console.log("clientImages", clientData && clientData.images);
  


  // const slidesettings = {
  //   dots: true,
  //   speed: 300,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   dotsClass: "slick-dots slick-thumb carousel-indicators",
  //   customPaging: function (i) {
  //     return (
  //       <img src={process.env.PUBLIC_URL + '/images/img-' + (i + 1) + '.jpg'} alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
  //     );
  //   },
  // };

  // const clientslides = slideitems.map((slideitem) => (
  //   <div className="carousel-item" key={slideitem.id}>
  //     <Row className="align-items-center">
  //       <Col lg="6">
  //         <div className="client-box mt-4">
  //           <h5 className="line-height_1_6">{slideitem.description}</h5>
  //           <div className="client-icon">
  //             <i className="mdi mdi-format-quote-close"></i>
  //           </div>
  //           <h5 className="f-18">{slideitem.name} </h5>
  //           <p className="text-primary mb-0">- {slideitem.designation} </p>
  //         </div>
  //       </Col>
  //       <Col lg={6}>
  //         <div className="text-center mt-4">
  //           <img src={slideitem.img} className="img-fluid" alt="" />
  //         </div>
  //       </Col>
  //     </Row>
  //   </div>
  // ));

  return (
    <>
      {/* <section className="section" id="clients"> */}
        {/* <Container> */}
          {/* <Row>
            <Col lg={12}>
              <div className="title-box text-center">
                <h3 className="title-heading mt-4">Clients Loved Products</h3>
                <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                elementum mauris
                  sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>
                <img src={HomeUrl} height="15" className="mt-3" alt="" />
              </div>
            </Col>
          </Row> */}
          {/* <Row className="mt-5 pt-4">
            <Col lg="12">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <Slider {...slidesettings}>
                    {clientslides}
                  </Slider>
                </div>
              </div>
            </Col>
          </Row> */}
        {/* </Container> */}
      {/* </section> */}
      <section className="section"   id="clients">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-box text-center">
                <h3 className="title-heading mt-4">{ clientData && clientData.Heading }</h3>
                <p className="text-muted f-17 mt-3">{clientData && clientData.Description }</p>
                {clientData.Heading  && (
                <img src={HomeUrl} height="15" className="mt-3" alt="" />
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-10 pt-4 pl-20 pr-20">
          {clientData && clientData.images && clientData.images.length > 0 && clientData.images.map((image, index) => (
  <Col lg={3} key={index} >
    <div className="client-images mt-2 pt-1 text-center" style={{textAlign:"center",justifyContent:"center",alignItems:"Center"}}>
      {image.clientLogos && (
       
        <img
          src={`${image.clientLogos.url}`} 
          // src={image.clientLogos.url}
          alt={image.alternativeText}
          className="img-fluid d-block mx-auto"
          style={{  width: "170px", height: "200px",objectFit:"contain",}}
         
        />
       
      )}
    </div>
  </Col>
))}


</Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
