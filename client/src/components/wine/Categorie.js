import React, { Component } from 'react'
import NavWine from '../home/NavWine'
import API from '../../utils/API'
import { Image } from "semantic-ui-react";
import { Button } from 'react-bootstrap'
import Banner from '../home/Banner'

class Categorie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Pagecategorie: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const id = this.props.match.params.id
    API.getPageCategorie(id).then((res) => {
      if(nextProps.id !== id){
      this.setState({ Pagecategorie: res.data })}
    }).catch(err => {
      console.log("error test", err)
    })
  }


  render() {
    const Pagecategories = this.state.Pagecategorie;
    return (
      <div>
        <NavWine />
<Banner />
        <div className="row" style={{ marginTop: "1%" }}>

          <div className="col-md-2 filtre" style={{ border: "black solid 2px" }}>

            <h1 style={{ textAlign: "center" }}>Filtres</h1>

          </div>

          <div className="col-md-10 produits">
            <div className="row" style={{ marginTop: "5%" }}>
              {Pagecategories.map(Pagecategorie => {
                return (
                  <div className="col-md-3" style={{ border: "black solid 2px", margin: "2%", padding: "1%", marginBottom: "10px" }}>
                    <Image src={Pagecategorie.picture} />
                    <h3>{Pagecategorie.title}</h3>
                    <p>{Pagecategorie.description}</p>
                    <p>Note : {Pagecategorie.note}</p>
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