import React, {Component} from 'react';

import imgAdd from '../../Img/add_home.png';

import './CardHome.css';

class CardHome extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className="o-card-home">
                <img alt="" src={imgAdd} className="o-img-addhome" />
                <p className="o-text-addhome">Add new home</p>
            </div>
        )
    }

}

export default CardHome