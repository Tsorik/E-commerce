import React, { Component } from 'react'
import Slide from './Slide';
import Banner from './Banner';
import NavWine from './NavWine'
import './Home.css'



class Home extends Component {


    render() {
        return (
            <div>
                <NavWine />
                <Slide />


                <Banner />

                <div className="container">
                    <div className="row" style={{ marginTop: "5%" }}>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                        <div className="col-md-2" style={{ border: "black solid 2px", padding: "10%", margin: "auto", marginBottom: "10px" }}>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" style={{ textAlign: "center", backgroundColor: "grey" }}>
                        <h1>Qui Sommes nous ? </h1>
                        <p>

                            Ac ne quis a nobis hoc ita dici forte miretur, quod alia quaedam in hoc facultas sit ingeni, neque haec dicendi ratio aut disciplina,
                            ne nos quidem huic uni studio penitus umquam dediti fuimus. Etenim omnes artes, quae ad humanitatem pertinent, habent quoddam commune
                             vinculum, et quasi cognatione quadam inter se continentur.</p>
                        <p>

                            Ac ne quis a nobis hoc ita dici forte miretur, quod alia quaedam in hoc facultas sit ingeni, neque haec dicendi ratio aut disciplina,
                            ne nos quidem huic uni studio penitus umquam dediti fuimus. Etenim omnes artes, quae ad humanitatem pertinent, habent quoddam commune
                             vinculum, et quasi cognatione quadam inter se continentur.</p>
                        <p>
                            Ac ne quis a nobis hoc ita dici forte miretur, quod alia quaedam in hoc facultas sit ingeni, neque haec dicendi ratio aut disciplina,
                                                        ne nos quidem huic uni studio penitus umquam dediti fuimus. Etenim omnes artes, quae ad humanitatem pertinent, habent quoddam commune
                             vinculum, et quasi cognatione quadam inter se continentur.</p>
                        <p>
                            Ac ne quis a nobis hoc ita dici forte miretur, quod alia quaedam in hoc facultas sit ingeni, neque haec dicendi ratio aut disciplina,
                                                       ne nos quidem huic uni studio penitus umquam dediti fuimus. Etenim omnes artes, quae ad humanitatem pertinent, habent quoddam commune
                             vinculum, et quasi cognatione quadam inter se continentur.</p>

                    </div>

                </div>
            </div>


        )
    }
}
export default Home