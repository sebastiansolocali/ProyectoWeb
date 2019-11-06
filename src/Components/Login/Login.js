import React, {Component} from 'react'

import Header1 from '../Header/Header1'

import fondo from '../../Img/fondo_login.png'

import './Login.css'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="o-login">
                <div className="o-img-container-login">
                    <img alt="" src={fondo} className="o-img-fondo-login"/>
                </div>
                <section className="o-login-section">
                    <Header1 />
                    <div className="o-box-login">
                        <h2>E-come</h2>
                        <div className="o-info-login">
                            <h4>Login</h4>
                            <input className="o-input" type="text" placeholder="Username"/>
                            <input className="o-input" type="password" placeholder="Password"/>
                            <button className="o-button">Login</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Login