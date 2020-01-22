import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "bootswatch/dist/journal/bootstrap.min.css"
import { Image } from "semantic-ui-react";
import Wine from "../../images/wine.png"
import Cart from '../home/Cart'


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lenght_cart: 0
        };
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    
    // componentDidMount() {
    //     var cart = JSON.parse(localStorage.getItem("cart_id"))
    //     this.setState({ cart: cart });
    //     var array_cart = Object.entries(cart);
    //     this.setState({lenght_cart: array_cart.length})
    // }

    displayConnect() {
        const sessionlog = JSON.parse(localStorage.getItem('usertoken'));
        if (sessionlog) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/profile">
                            Mon compte
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={this.logOut.bind(this)} className="nav-link">
                            Déconnexion
                        </Link>
                    </li>
                </ul>
            )
        }
        else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Connexion
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            S'inscrire
                        </Link>
                    </li>
                </ul>
            )
        }
    }

    displayAdmin() {
        
        const sessionlog = JSON.parse(localStorage.getItem('usertoken'));
        if (sessionlog) {
            var sessionglogadmin = sessionlog.admin;
        } else {
            return;
        }
        if (sessionglogadmin) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/indexadmin" className="nav-link">
                            SuperAdmin!
                        </Link>
                    </li>
                </ul>
            )
        }
    }

    render() {
        var lenght_cart = this.props.nbr_cart
        if(lenght_cart === 0){
            lenght_cart = null
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <Image
                                src={Wine}
                                alt="logo"
                                style={{ width: `12%` }}
                            />
                        </Link>
                    </li>
                </ul>
                {this.displayAdmin()}
                {this.displayConnect()}
                <ul>
                    <li className="nav-item" style={{ textAlign: "right" }}>
                        <Cart /><Link data-toggle="modal" data-target="#cartModal" to="/panier" className="nav-link" style={{ fontSize: `30px`, color: "red" }}>
                            <i className="fas fa-shopping-basket">{lenght_cart}</i>
                        </Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default withRouter(Navbar)