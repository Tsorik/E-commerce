import React, { Component } from 'react';
import "./FinalCommande.css";
import { ButtonGroup, Button } from 'react-bootstrap'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Link } from 'react-router-dom'


export default class FinalCommande extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="delivery container">
                    <div className="row">
                        <div className="infos bg-light col-md-8">
                            <h2>Informations sur la livraison</h2>
                            <div className="delivery-buttons">
                                <ButtonGroup toggle className="buttons">
                                    <ToggleButton type="radio" name="radio" defaultChecked value="1">
                                        A domicile
                                </ToggleButton>
                                    <ToggleButton type="radio" name="radio" defaultChecked value="2">
                                        En point relais
                                </ToggleButton>
                                </ButtonGroup>
                            </div>
                            <div className="adress container">
                                <tr>
                                    <td>Mr Fromage</td>
                                </tr>
                                <tr>
                                    <td>Rue du fromage qui tâche</td>
                                </tr>
                                <tr>
                                    <td>Roquefort City</td>
                                </tr>
                            </div>
                            <div className="add-adress row">
                                <Link class="add" type="button" role="button">
                                    <p>Ajout nouvelles adresses</p>
                                </Link>
                                <Link class="selection" type="button" role="button">
                                    <p>Sélection autres adresses</p>
                                </Link>
                            </div>
                        </div>
                        <div className="order bg-light col-md-4">
                            <h2>Récapitulatif de la commande</h2>
                            <label>Code promo :</label>
                            <div className="promo-code">
                                <input type="text" name="promo" />
                                <Button href="/" variant="outline-success">Valider</Button>
                            </div>
                            {/* message erreur si code promo faux */}
                            <p>Total :</p>
                            <div className="order-now row">
                                <Button href="/" variant="success" size="lg" block>
                                    Commander
                                </Button>
                                <p>En cliquant sur "Commander", je confirme avoir lu et accepté les termes et conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payement container">
                    <div className="row">
                        <div className="methods-payement bg-light col-md-8">
                            <h2>Méthodes de paiement</h2>
                            <div className="cb container">
                                <p>******* Visa machin muche *******</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payement container">
                    <div className="row">
                        <div className="recap-delivery bg-light col-md-8">
                            <h2>Revue des commandes</h2>
                            <table className="table col-md-4">
                                <tbody>
                                    <tr>
                                        <td>Nom du produit</td>
                                        <td><img className="wine" src="https://www.vinatis.com/33489-thickbox_default/lirac-2016-xavier-vignon.png"></img></td>
                                        <td>Prix</td>
                                    </tr>
                                    <tr>
                                        <td>Nom du produit</td>
                                        <td><img className="wine" src="https://www.vinatis.com/40931-detail_default/magnum-la-croix-de-carbonnieux-2016-second-vin-du-chateau-carbonnieux.png"></img></td>
                                        <td>Prix</td>
                                    </tr>
                                    <tr>
                                        <td>Nom du produit</td>
                                        <td><img className="wine" src="https://www.vinatis.com/37763-detail_default/demi-bouteille-chateau-guiraud-2010-1er-cru-classe.png"></img></td>
                                        <td>Prix</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



// import React, { Component } from 'react';
// import "./FinalCommande.css";
// import API from '../../utils/API'
// import { Button, ButtonToolbar } from 'react-bootstrap'


// export default class FinalCommande extends React.Component {


//     render() {
//         return (
//             <React.Fragment>
//                 <div className="livraison container">
//                     <div className="row">
//                         <div className="livraison bg-light col-md-8">
//                             <h2>Informations sur la livraison</h2>
//                             <ButtonToolbar>
//                                 <Button variant="outline-danger">Livraison à domicile</Button>
//                                 <Button variant="outline-danger">En point relais</Button>
//                                 <div className="adresse container">
//                                     <p>Mr Fromage</p>
//                                     <p>Rue du fromage qui tâche</p>
//                                     <p>Roquefort City</p>
//                                 </div>
//                             </ButtonToolbar>
//                             <div className="ajout-adresse container">
//                                 <div className="row">
//                                     <p>Ajout nouvelles adresses</p>
//                                     <p>Sélection autres adresses</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="recap container">
//                         <div className="bg-light col-md-4">
//                             <h2>Récapitulatif de la commande</h2>
//                             <label>Code promo :</label>
//                             <input type="text" name="promo" />
//                             <Button variant="success">Valider</Button>
//                             {/* message erreur si code promo faux */}
//                             <p>Total :</p>
//                             <Button href="success">Commander</Button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="paiement container">
//                     <div className="row">
//                         <div className="bg-light col-md-8">
//                             <h2>Méthodes de paiement</h2>
//                             <div className="cb container">
//                                 <p>******* Visa machin muche *******</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="paiement container">
//                     <div className="row">
//                         <div className="bg-light col-md-12">
//                             <h2>Revue des commandes</h2>
//                             <table className="table col-md-12">
//                                 <tbody>
//                                     <tr>
//                                         <td>1er produit</td>
//                                         <td>2ème produit</td>
//                                         <td>3ème produit</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }


// }