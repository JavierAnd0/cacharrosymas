import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";
import "pure-react-carousel/dist/react-carousel.es.css";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1600}  // Ancho natural del slide para un monitor grande
    naturalSlideHeight={900}  // Alto natural del slide para pantalla completa
    totalSlides={3}
    isPlaying={true}
    interval={2000}
    infinite={true}
    touchEnabled={true}
    dragEnabled={true}
    style={{
      width: "100vw",      // Ancho completo de la ventana
      height: "60vh",     // Alto completo de la ventana
      maxWidth: "100%",    
      margin: "0 auto",    
      overflow: "hidden",  
    }}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiainsuranceconsultants.com%2Fwp-content%2Fuploads%2F2015%2F05%2F800x800.png&f=1&nofb=1&ipt=0148426d4f0b999f1fa3ae57f93b2f0be244f04600c02765726f35185f59d05d&ipo=images" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ajuste de la imagen
        />
      </Slide>
      <Slide tag="a" index={1}>
        <Image 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiainsuranceconsultants.com%2Fwp-content%2Fuploads%2F2015%2F05%2F800x800.png&f=1&nofb=1&ipt=0148426d4f0b999f1fa3ae57f93b2f0be244f04600c02765726f35185f59d05d&ipo=images" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ajuste de la imagen
        />
      </Slide>
      <Slide tag="a" index={2}>
        <Image 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiainsuranceconsultants.com%2Fwp-content%2Fuploads%2F2015%2F05%2F800x800.png&f=1&nofb=1&ipt=0148426d4f0b999f1fa3ae57f93b2f0be244f04600c02765726f35185f59d05d&ipo=images" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ajuste de la imagen
        />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
