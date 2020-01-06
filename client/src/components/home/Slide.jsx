import React,{Component} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import { Button } from 'react-bootstrap'
import "bootswatch/dist/journal/bootstrap.min.css"
import API from "../../utils/API"



// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
class Slide extends Component {

  constructor(props){
    super(props)

    this.state = {
      image: []
    };
  }

  componentDidMount() {
    API.getImage().then((res) => {
      this.setState({ image: res.data })
      console.log(res.data)
    }).catch(err => {
console.log("error test", err)
    })
  }

  render() {
    const images = this.state.image;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
    paritialVisibilityGutter: 30
  }
};

    return (
      <Carousel
        partialVisbile
        
        itemClass="image-item"
        responsive={responsive}
        infinite={true}
      >
        {images.map(image => {
          return (
            <div style={{margin:"4%"}}>
              <Image
                key={image.id}
                draggable={false}
                style={{ width: `50%`, height: `50%`, margin:"6%" }}
                src={image.picture}
              />
              <p align="center">{image.description}</p>
              <Button variant="secondary" href={`/produit/${image.id}`}>Voir plus</Button>
            </div>
          );
        })}
      </Carousel>
    );
  };
}


export default Slide;

