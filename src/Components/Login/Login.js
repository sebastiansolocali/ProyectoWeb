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
                <img alt="" src={fondo} className="o-img-fondo-login"/>
                <section className="o-login-section">
                    <Header1 className="o-header"/>
                    <div className="o-box-login">
                        <h2>E-come</h2>
                        <div className="o-info-login">
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Login