import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Image } from "semantic-ui-react"
import API from '../../utils/API'
import './cart.css'


class Cart extends Component {


    constructor(props){
        super(props)
        this.state = {
          panier: []
        };
      }
    
      componentDidMount() {
        API.getImage().then((res) => {
          this.setState({ panier: res.data })
          console.log(res.data)
        }).catch(err => {
    console.log("error test", err)
        })
      }
    
render(){
    const resultPanier = this.state.panier;
    return(
    <div class="modal" id="cartModal" role="dialog" aria-labelledby="cartModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel"><i class="glyphicon glyphicon-shopping-cart"></i>Mon panier</h4>
                </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table">
                            {resultPanier.map(paniers => { return( 
                            <tr>
                                <td><img class="attachment-shop_catalog" width="30" height="30" src={paniers.picture}/></td>
                                <td>{paniers.title} </td>
                                <td>{paniers.price}  €</td>
                                <td>x1</td>
                            </tr>
                                );
                             })}
                            </table>
                        </div>
                            <p class="total-price lead text-right">Total : 390.00 €</p>
                    </div>
                        <div class="modal-footer">
                            <button class="btn btn-default" type="button" data-dismiss="modal">Fermer</button>
                            <button class="btn btn-primary" type="button">Finaliser ma commande </button>
                        </div>
                </div>
            </div>
        </div>
    )}
}
export default Cart