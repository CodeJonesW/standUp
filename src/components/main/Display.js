import React, { Component } from 'react';
import StandUp from './StandUp'


class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

     
    render() {
        if(!this.props.standUps){
            return (
                <div id="display">
                    <ul id="standUp">
                        <li> Welcome to StandUp </li>
                        <li> An app for developers to record their thoughts in a standUp format </li>
                        <button  disabled    className="myStandUpButton"> <span aria-labelledby="jsx-a11y/aria-proptypes" role="img" alt="emoji "> ✅</span> </button>
                        <button  disabled className="myStandUpButton"> <span aria-labelledby="jsx-a11y/aria-proptypes" role="img" alt="emoji ">❌</span> </button>
                    </ul>
                    <ul id="completeStandUp">
                        <li> Yesterday: Find StandUp</li>
                        <li> Today: Login, start recording</li>
                        <li> Blocker: None</li>
                        <button  disabled    className="myStandUpButton"> <span aria-labelledby="jsx-a11y/aria-proptypes" role="img" alt="emoji "> ✅</span> </button>
                        <button  disabled className="myStandUpButton"> <span aria-labelledby="jsx-a11y/aria-proptypes" role="img" alt="emoji ">❌</span> </button>
                    </ul>
                </div>
            )
        } else {
        return (
            <div id="display">
              {this.props.standUps.map((x, index) => {
                return (
                    <StandUp complete={x.complete} updateStandUp={this.props.updateStandUp} deleteStandUp={(e) => this.props.deleteStandUp(e)} key={index} yesterday={x.yesterday} today={x.today} blocker={x.blocker} standUpId={x.id} />
                )
                }, this)}  
              
                
            </div>
        );
    }
    }
}

export default Display;