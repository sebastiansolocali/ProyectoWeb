import React, {Component} from 'react'

import Header2 from '../Header/Header2'

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
            <div>
                <Header2 img={User} />
            </div>
        )
    }

}

export default Profile