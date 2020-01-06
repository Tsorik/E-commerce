import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/home/Navbar'
import Categorie from './components/wine/Categorie'
import Produit from './components/wine/Produit'
import Home from './components/home/Home'
import Footer from './components/home/Footer'
import Login from './components/connexion/Login'
import Register from './components/connexion/Register'
import Panier from './components/panier/Panier'
import "bootswatch/dist/journal/bootstrap.min.css"
// import Cart from './components/home/Cart'




class App extends  Component{
  render(){
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/categorie/:id" component={Categorie}/>
          <Route exact path="/produit/:id" component={Produit}/>
          <Route exact path="/panier" component={Panier}/>
        </div>
      </div>
      <footer>
      <Footer />
      </footer>
    </Router>
  )
}
}
export default App;
