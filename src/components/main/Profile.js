import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
            return (
                <div id="profile">
                    {/* <p>StandUp @ </p> */}
                    <img id="standUpLogo" src="../../standUp.png"></img>
                </div>
                );
       
    }
}

export default Profile;