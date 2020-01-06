import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import API from "../../utils/API"



class NavWine extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorie: []
        };
    }

    componentDidMount() {
        API.getCategorie().then((res) => {
            this.setState({ categorie: res.data })
            console.log(res.data)
        }).catch(err => {
            console.log("error test", err)
        })
    }



    render() {
        const categories = this.state.categorie;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Form className="form-inline my-5 my-lg-0">
                    <input className="form-control md-2" type="text" placeholder="Search" />
                    <Button className="btn btn-secondary md-1" type="submit">Search</Button>
                </Form>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        {categories.map(categorie => {

                            return (
                                <li className="nav-item col-md-3">
                                    <Link to={`/categorie/${categorie.id}`} className="nav-link">
                                        {categorie.title}
                                    </Link>
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>
            </nav>


        )
    }
}

export default withRouter(NavWine)