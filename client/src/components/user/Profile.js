
import React, { Fragment } from "react";
import NavWine from '../home/NavWine'
import './profile.css'
import { Link } from "react-router-dom"
import API from "../../utils/API";


export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
        };
    }

    componentDidMount() {
        const email = JSON.parse(localStorage.getItem('usertoken'));
        API.getProfile(email).then((res) => {
            this.setState({ user: res.data })
        }).catch(err => {
            console.log("Profile ", err)
        })
    }

    render() {
        const info = this.state.user;
        return (
            <div>
                <NavWine />
                <div className="container">
                    <div className="row">
                        <div id="bienvenue">
                            {info.map(function(user, i) {
                                return (
                                    <Fragment key={i}>
                                        <h3 >Bienvenue {user.prenom}</h3>
                                    </Fragment>
                                );
                            })
                            }
                        </div>
                    </div>

                    <div className="row">
                        <ul className="navProfile">
                            <li className="detailsnav"><Link to="/profile">MES INFORMATIONS PERSONNELLES</Link></li>
                            <li className="detailsnav"><Link to="/profile">HISTORIQUE D'ACHATS</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="container infoPerso">
                    <div className="row">
                        <h5>MES INFORMATIONS PERSONNELLES</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            {info.map(user => {
                                return (
                                    <p>Nom Prénom :<i>{user.nom} {user.prenom}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                const event = new Date(user.anniversaire.date);
                                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                                return (

                                    <p>Date de naissance : {event.toLocaleString('fr-FR', options)}</p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p>Téléphone : <i>0{user.tel}</i></p>
                                );
                            })
                            }
                            {info.map(user => {

                                return (
                                    <p>E-Mail : <u><i>{user.email.toString()}</i></u></p>
                                );
                            })
                            }
                        </div>
                        <div className="col-md-6">
                            <p>Adresse de livraison</p>
                            <p><u>Adresse de facturation</u></p>
                            {info.map(user => {
                                return (
                                    <p><i>{user.nom} {user.prenom}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p><i>{user.adresse}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p><i>{user.postal} {user.ville}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p><i>{user.pays}</i></p>
                                );
                            })
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/profile/modif">Modifier mes informations pesonnelles</Link>
                        </div>

                    </div>
                </div>

                <div className="container histAchats">
                    <div className="row">
                        <h5>HISTORIQUE D'ACHATS</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Suivi de commande</p>
                        </div>
                        <div className="col-md-6">
                            <p>Factures</p>
                        </div>
                    </div>
                    <div className="row">
                        <form className="btn-contact">
                            <input type="submit" id="btn-cont" value="CONTACTEZ NOUS PAR MAIL" title="contact" />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

