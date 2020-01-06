import React, { Component } from 'react'
import NavWine from '../home/NavWine'
import Slide from '../home/Slide'
import API from '../../utils/API'
import { Image } from "semantic-ui-react"
import './produit.css'


class Produit extends Component {

    constructor(props){
        super(props)
        this.state = {
          produits: []
        };
      }
    
      componentDidMount() {
        const id =  this.props.match.params.id
        API.getProduct(id).then((res) => {
          this.setState({ produits: res.data })
        }).catch(err => {
           console.log("error test", err)
        })
      }


    render() {
        const produitsInfo = this.state.produits;
        return (
            <div>
                <NavWine />              
                <div className="container">
                    <div className="row">
                         {produitsInfo.map(produit => { return(
                        <div className="col-md-4 photo" style={{ padding: "10%", margin: "auto", marginBottom: "10px"}}>
                            <Image src={produit.picture} />
                        </div>
                        );})}
                        <div className="col-md-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                    {produitsInfo.map(produit => { return(
                                        <h1 style={{ textAlign: "center", padding: "7%"}}>{produit.title}</h1>
                                        );})}
                                        {produitsInfo.map(produit => { return(
                                        <p style={{ textAlign: "center", padding: "7%"}}>{produit.description}</p>
                                        );})}
                                    </div>

                                    <div className="col-md-6">
                                        {produitsInfo.map(produit => { return(
                                        <h1 style={{ textAlign: "center", padding: "7%" }}>Prix : {produit.price} €</h1>
                                        );})}
                                    </div>

                                    <div className="col-md-6">
                                        <h1 style={{ textAlign: "center", padding: "7%" }}>Quantité</h1>
                                    </div>

                                    <div className="col-md-6">
                                        <h1 style={{ textAlign: "center", padding: "7%" }}>Ajout au panier</h1>
                                    </div>

                                    <div className="col-md-12" style={{ padding: "7%" }}>
                                        <h1>Description</h1>
                                        {produitsInfo.map(produit => { return(
                                        <p>{produit.desclong}</p> 
                                        );})}
                                    </div>
                                </div>
                            </div>   
                        </div>              
                    </div>

                    <div className="row" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                        <div className="col-md-6">
                            <div>
                            {produitsInfo.map(produit => { return(
                                <h1 style={{ textAlign: "center" }}>Note : {produit.note}</h1>
                                );})}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h1 style={{ textAlign: "center" }}>Idées recettes</h1>
                        </div>
                    </div>
                </div>

                <div class="container" style={{ backgroundColor: "grey", marginBottom: "3%" }}>

                    <div class="row">
                        <div>
                            <h1>Avis</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-1">
                            <p>pdp</p>
                        </div>

                        <div class="col-md-2">
                            <p>nom</p>
                        </div>
                    </div>
                    <div class="row">
                        <div>
                            <p>Hacque adfabilitate confisus cum eadem postridie feceris, ut incognitus haerebis et repentinus, hortatore illo hesterno clientes numerando, qui sis
                                vel unde venias diutius ambigente agnitus vero tandem et adscitus in amicitiam si te salutandi adsiduitati dederis triennio indiscretus et per tot
                                dierum defueris tempus, reverteris ad paria perferenda, nec ubi esses interrogatus et quo tandem miser discesseris, aetatem omnem frustra in stipite
                                conteres summittendo.
                            </p>
                        </div>

                    </div>
                </div>

                <div class="container">
                    <Slide />
                </div>
            </div>

        )
    }
}
export default Produit