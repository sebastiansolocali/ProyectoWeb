import React, { Component } from 'react';

import Header1 from '../Header/Header1'

import fondo from '../../Img/fondo_signup.png'

import './Signup.css'

class Signup extends Component {

    constructor(prop) {
        super(prop)
        this.state = {

        }
    }

    render() {
        return(
            <div className="o-signup">
                <div className="o-img-container-signup">
                    <img alt="" src={fondo} className="o-img-fondo-signup"/>
                </div>
                <section className="o-signup-section">
                    <Header1 />
                    <div className="o-box-signup">
                        <h2>E-come</h2>
                        <div className="o-info-signup">
                            <h4>Signup</h4>
                            <input className="o-input" type="text" placeholder="Name and last name"/>
                            <input className="o-input" type="text" placeholder="Username"/>
                            <input className="o-input" type="text" placeholder="Mail"/>
                            <input className="o-input" type="text" placeholder="Confirm mail"/>
                            <input className="o-input" type="text" placeholder="Password"/>
                            <input className="o-input" type="text" placeholder="Confirm password"/>
                            <button className="o-button">Signup</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Signup