import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if(!this.props.logged){
            return (
                <div id="profile">
                    <p>StandUp @ <span>🔴 </span></p>
                </div>
            )
        } else {
            return (
                <div id="profile">
                    <p>StandUp @ <span>🟢 </span></p>
                </div>
                );
        }
       
    }
}

export default Profile;