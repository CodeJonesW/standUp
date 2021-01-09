import React, { Component } from 'react';
import StandUp from './StandUp'
import StandUpForm from './StandUpForm'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

     
    render() {
        if(!this.props.standUps){
            return (
                <div id="display">
                    <StandUpForm handleSubmit={(e) => this.props.handleSubmit(e)}/>     
                </div>
            )
        } else {
        return (
            <div id="display">
              {this.props.standUps.map((x, index) => {
                return (
                    <StandUp key={index} yesterday={x.yesterday} today={x.today} blocker={x.blocker} />
                )
                }, this)}  
              
                <StandUpForm handleSubmit={(e) => this.props.handleSubmit(e)}/>
            </div>
        );
    }
    }
}

export default Display;