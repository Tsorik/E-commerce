import React, { Component } from 'react';
import Banner from '../home/Banner';
import NavWine from '../home/NavWine';
import footer from '../home/Footer';
import { Form, Button } from "react-bootstrap";

export default class Panier extends React.Component {
    state = {
        articles: "",
        prix: "",
        quantite: "",
        prixTotal: "",
        totalArticles: "",
        livraison: "",
        total: "",

    };

    render() {
        const { articles, prix, quantite, prixTotal, totalArticles, livraison, total } = this.state;
        return (
            <div className="Panier">
                <Form>
                    <Form.Group controlId="article" bssize="large">
                        <Form.Label>Article(s)</Form.Label>
                        <Form.Control
                            type=""
                            value={articles}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="prix" bssize="large">
                        <Form.Label>Prix</Form.Label>
                        <Form.Control
                            type=""
                            value={prix}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="quantite" bssize="large">
                        <Form.Label>Quantité</Form.Label>
                        <Form.Control
                            type=""
                            value={quantite}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="prixTotal" bssize="large">
                        <Form.Label>Prix Total</Form.Label>
                        <Form.Control
                            type=""
                            value={prixTotal}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="totalArticles" bssize="large">
                        <Form.Label>Total Articles</Form.Label>
                        <Form.Control
                            type=""
                            value={totalArticles}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="livraison" bssize="large">
                        <Form.Label>Livraison</Form.Label>
                        <Form.Control
                            type="text"
                            value={livraison}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="total" bssize="large">
                        <Form.Label>Total</Form.Label>
                        <Form.Control
                            type=""
                            value={total}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button onClick={this.send} block bssize="large" type="submit">Continuer mes achats !</Button>
                    <p>{this.state.warning}</p>
                    <Button onClick={this.send} block bssize="large" type="submit">Valider mon panier !</Button>
                    <p>{this.state.warning}</p>
                </Form>
            </div>
        );
    }

};





