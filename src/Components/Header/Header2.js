import React from 'react'

import './Header2.css'

const Header2 = (props) => {
    return (
        <div className="o-header2">
            <div className="o-credits-container">
                <h2 className="o-title-header2">E-come</h2>
                <h4 className="o-title-header2">by Hypnotic</h4>
            </div>
            <img alt="" src={props.img} className="o-img-profile" />
        </div>
    )
}

export default Header2