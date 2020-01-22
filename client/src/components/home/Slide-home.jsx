import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import "bootswatch/dist/journal/bootstrap.min.css"
import API from "../../utils/API"
import { Link } from "react-router-dom"
import "./Slide.css"



// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
class SlideHome extends Component {

  constructor(props) {
    super(props)

    this.state = {
      image: []
    };
  }

  componentDidMount() {
    API.getImage().then((res) => {
      this.setState({ image: res.data })
    }).catch(err => {
      console.log("error test", err)
    })
  }

  render() {
    const images = this.state.image;

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        paritialVisibilityGutter: 50
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        paritialVisibilityGutter: 30
      }
    };

    return (
      <div className="row">

             
      <Image className="col-md-4"
               
                draggable={false}
               
                src="https://cache.marieclaire.fr/data/photo/w1000_ci/54/raclette.jpg"
              />
     
{/* CAROUSEL LIMIT AFFICHAGE DE BOUTEILLE !!!!!!*/}

      <Carousel
      className="col-md-8"
        partialVisbile

        itemClass="image-item"
        responsive={responsive}
        infinite={true}
      >
        {images.map(image => {
          return (
            <figure id="vinslide" className="vinslide" style={{ margin: "6%" }}>
              <Image
                key={image.id}
                draggable={false}
                style={{ width: `100%`, height: `100%`, margin: "6%" }}
                src={image.picture}
              />
              <figcaption id="desc" className="desc">
              <Link to={`/produit/${image.id}`}>
               {image.description}
              </Link>
             </figcaption>
            </figure>
          );
        })}
      </Carousel>
      </div>
    );
  };
}


export default SlideHome;

