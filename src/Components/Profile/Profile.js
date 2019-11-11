import React, {Component} from 'react'

import Header2 from '../Header/Header2'
import CardHome from '../CardHome/CardHome'

import User from '../../Img/user.png'

import './Profile.css'

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="o-profile">
                <Header2 img={User} />
                <div className="o-profile-content">
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                </div>
            </div>
        )
    }

}

export default Profile