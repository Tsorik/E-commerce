import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import API from "../../utils/API"

class NavWine extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorie: [],
            wine: [],
            updateCat: this.props.updateCat
        };
    }

    componentDidMount() {
        API.getImage().then((res) => {
            this.setState({ wine: res.data })
        }).catch(err => {
            console.log("error test", err)
        })
        API.getCategorie().then((res) => {
            this.setState({ categorie: res.data })
        }).catch(err => {
            console.log("error test", err)
        })
    }

    handleClick(id) {
        this.props.history.push(`/categorie/${id}`)
        if (this.props.updateCat) {
            this.props.updateCat(id)
        }
    }
    

    render() {
        const categories = this.state.categorie;
        const wines = this.state.wine;

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Form className="form-inline my-5 my-lg-0">
                    <input list="wine" className="form-control md-2"  placeholder="Search" />
                    <datalist id="wine">
                        {wines.map( function(wine, j){
                            return (
                                <Fragment key={j}>
                                <option  value={wine.title} />
                                </Fragment>
                            );
                        })
                        }
                    </datalist>
                    <Button className="btn btn-secondary md-1" type="submit">Rechercher</Button>
                </Form>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        {categories.map(function(categorie, k) {
                            return (
                                <li  key={k} className="nav-item col-md-3"> 
                                <Fragment key={k} >
                                    <Link to={`/categorie/${categorie.id}`} className="nav-link" onClick={() => this.handleClick(categorie.id)}>
                                        {categorie.title}
                                    </Link>
                                    </Fragment>
                                </li>
                            );
                        }.bind(this))
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavWine)