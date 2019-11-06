import React, { Component } from 'react'

import Header1 from '../Header/Header1'

import fondo from '../../Img/fondo_home.png'

import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="o-home">
                <img alt="" src={fondo} className="o-img-fondo-home"/>
                <section className="o-home-section">
                    <Header1 />
                    <div className="o-title-home">
                        <h1 className="o-text">E-come</h1>
                        <h4 className="o-text">Welcome</h4>
                    </div>
                    <button className="o-button o-button-readmore">Read More</button>
                </section>
                <section className="o-readmore-section">
                    <div className="o-readmore-text">
                        <h5>Disconnect your devices from one place</h5>
                    </div>
                    <div className="o-readmore-text">
                        <h5>Did you forget to turn off your tv? Don't you worry, we'll do it for you</h5>
                    </div>
                </section>
                <section className="o-info-section">
                    <div className="o-info">
                        <h5>Do not waste energy on your devices, turn them off and help the planet</h5>
                    </div>
                </section>
            </div>
        )
    }

}

export default Home