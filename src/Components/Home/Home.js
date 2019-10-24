import React, { Component } from 'react'

import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <section className="o-section-home">
                <div className="o-home-container">
                    <div className="o-header">
                        <h5>Hypnotic</h5>
                        <div className="o-access-container">
                            <button>Sign in</button>
                            <button>Login</button>
                        </div>
                    </div>
                    <div className="o-title-home">
                        <h1>E-come</h1>
                        <h4>Welcome</h4>
                    </div>
                    <button>Read More</button>
                </div>
            </section>
        )
    }

}

export default Home