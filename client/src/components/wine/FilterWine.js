import React, { Component } from 'react'
import { Button, Accordion, Card, Form, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "react-input-range/lib/css/index.css"
import RangeSlider from './Filters/price'
import Rating from '@material-ui/lab/Rating';

class FilterWine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      region: [],
      alliance: [],
    };
  }

  updateValue = (value) => {
    this.state.value = value;
  }
  
  up(props){
    props.priceUpdate(this.state.value)
  }

  handleChangeRegion = (e) => {
    this.setState({
      [e.target.region]: e.target.value
    })
  }

  render() {
    return (
      <Accordion>
        <Form action="">

          {/* __________________TRIER PAR  ____________________*/}
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Trier par
      </Accordion.Toggle>
           </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <select>
                    <option>Trier par</option>
                    <option value="Prix decroissanr">Prix decroissant</option>
                    <option value="Prix croissant">Prix croissant</option>
                    <option value="Nouveautés">Nouveautés</option>
                  </select>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Form>

        {/* __________________FILTRES PAR PRIX ____________________*/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Prix
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Form method="get">
                <div>
                <RangeSlider updateValue={this.updateValue.bind(this)}/>
                </div>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* __________________FILTRES PAR ALLIANCES ____________________*/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Alliance
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul className="Filter-nav">

                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Agneau
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Charcuterie
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Coquillages et crustacés
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Foie gras
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Fromage corsé
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Fromage doux
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      viande rouge
                    </Link>
                  </Form>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


        {/* __________________FILTRES PAR REGIONS ____________________*/}

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Région
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul className="Filter-nav">

                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <div>
                      <label>
                        <span className="ns-FilterProduct-iconContent">Alsace</span>
                        <input
                          name='region'
                          type="hidden"
                          value={this.state.region}
                          onClick={e => this.handleChangeRegion(e)} />
                      </label>
                    </div>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <label>
                      <span className="ns-FilterProduct-iconContent"> Beaujolais-Mâconnais</span>
                      <input
                        name='region'
                        type="hidden"
                        value={this.state.region}
                        onClick={e => this.handleChangeRegion(e)} />
                    </label>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <label>
                      <span className="ns-FilterProduct-iconContent">Bordeaux</span>
                      <input
                        name='region'
                        type="hidden"
                        value={this.state.region}
                        onClick={e => this.handleChangeRegion(e)} />
                    </label>
                  </Form>
                </li>
                <li  style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <label>
                      <span className="ns-FilterProduct-iconContent">Bourgogne</span>
                      <input
                        name='region'
                        type="hidden"
                        value={this.state.region}
                        onClick={e => this.handleChangeRegion(e)} />
                    </label>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <label>
                      <span className="ns-FilterProduct-iconContent">Champagne</span>
                      <input
                        name='region'
                        type="hidden"
                        value={this.state.region}
                        onClick={e => this.handleChangeRegion(e)} />
                    </label>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <label>
                      <span className="ns-FilterProduct-iconContent">Italie</span>
                      <input
                        name='region'
                        type="hidden"
                        value={this.state.region}
                        onClick={e => this.handleChangeRegion(e)} />
                    </label>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <label>
                      <span className="ns-FilterProduct-iconContent">Rhône</span>
                      <input
                        name='region'
                        type="hidden"
                        value={this.state.region}
                        onClick={e => this.handleChangeRegion(e)} />
                    </label>
                  </Form>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

         {/* __________________FILTRES PAR NOTES ____________________*/}

         <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Notes
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul className="Filter-nav">
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                  <div>
                  <p><Rating name="read-only" value={5} readOnly size="small" /> 5 étoiles</p>
                  <p><Rating name="read-only" value={4} readOnly size="small" /> 4 étoiles</p>
                  <p><Rating name="read-only" value={3} readOnly size="small" /> 3 étoiles</p>
                  <p><Rating name="read-only" value={2} readOnly size="small" /> 2 étoiles</p>
                  <p><Rating name="read-only" value={1} readOnly size="small" /> 1 étoile</p>
                  <p><Rating name="read-only" value={0} readOnly size="small" /> Pas d'avis</p>
                  </div>
                  </Form>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}

export default FilterWine