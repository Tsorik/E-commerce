import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "bootswatch/dist/journal/bootstrap.min.css"
import { Image } from "semantic-ui-react";
import Wine from "../../images/wine.png"
import Cart from '../home/Cart'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    displayConnect(){
        const sessionlog = localStorage.getItem('usertoken');
        if (sessionlog){
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
        )}
        else{
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


    render() {
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
                {this.displayConnect()}
                <ul>
                    <li className="nav-item" style={{ textAlign: "right" }}>
                        <Cart /><Link data-toggle="modal" data-target="#cartModal" to="/" className="nav-link" style={{ fontSize: `30px`, color: "red" }}>
                            <i className="fas fa-shopping-basket"></i>
                        </Link>
                    </li>
                </ul>

            </nav>


        )
    }
}

export default withRouter(Navbar)