import React, { Component } from 'react'

import './Home.css'

import fondo from '../../Img/fondo_home.png'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="o-home">
                <img alt="" src={fondo} className="o-img-fondo"/>
                <section className="o-home-section">
                    <div className="o-header">
                        <h5>Hypnotic</h5>
                        <div className="o-access-container">
                            <button className="o-button o-button-signin">Sign in</button>
                            <button className="o-button o-button-login">Login</button>
                        </div>
                    </div>
                    <div className="o-title-home">
                        <h1 className="o-text">E-come</h1>
                        <h4 className="o-text">Welcome</h4>
                    </div>
                    <button className="o-button o-button-readmore">Read More</button>
                </section>
                <section className="o-readmore-section">
                    <div className="o-readmore-text">
                        <h5>Desconecta tus electrodomésticos desde un solo lugar</h5>
                    </div>
                    <div className="o-readmore-text">
                        <h5>¿Se te olvidó apagar el televisor? Tranquilo, nosotros te lo apagamos</h5>
                    </div>
                </section>
                <section className="o-info-section">
                    <div className="o-info">
                        <h5>Controla el consumo energético de tus electrodomésticos, desconéctalos y ayuda al medio ambiente</h5>
                    </div>
                </section>
            </div>
        )
    }

}

export default Home