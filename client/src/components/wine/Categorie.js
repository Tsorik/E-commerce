import React, { Component } from 'react'
import NavWine from '../home/NavWine'
import API from '../../utils/API'
import { Image } from "semantic-ui-react";
import { Button } from 'react-bootstrap'
import Banner from '../home/Banner'
import FilterWine from './FilterWine';
import Rating from '@material-ui/lab/Rating';

class Categorie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: [],
      Pagecategorie: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id    
    this.updateCat(id);
  }

  priceUpdate(value){
    this.state.value = value
  }

 
  

  updateCat(id) {
    API.getPageCategorie(id).then((res) => {
        this.setState({ Pagecategorie: res.data })
    }).catch(err => {
      console.log("error test", err)
    })    
  }

  render() {
    console.log(this.state.value)
    const Pagecategories = this.state.Pagecategorie;
    return (
      <div>
        <NavWine updateCat={this.updateCat.bind(this)}/>
        <Banner />
        <div className="row" style={{ marginTop: "1%" }}>
          <aside className="col-md-2 ListingProducts">
         <FilterWine  priceUpdate = {this.priceUpdate.bind(this)}/>
          </aside>

          <div className="col-md-10 produits">
            <div className="row" style={{ marginTop: "5%" }}>
              {Pagecategories.map(Pagecategorie => {
                return (
                  <div className="col-md-3" style={{ border: "black solid 2px", margin: "2%", padding: "1%", marginBottom: "10px" }}>
                    <Image src={Pagecategorie.picture} />
                    <h3>{Pagecategorie.title}</h3>
                    <p>{Pagecategorie.description}</p>
                    <p>Note :</p> <Rating name="read-only" value={Pagecategorie.note} precision={0.5}  readOnly/>
                    <h6 style={{ textAlign: 'right' }}>{Pagecategorie.price} €</h6>
                    <Button variant="secondary" href={`/produit/${Pagecategorie.id}`}>Voir plus</Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default Categorie