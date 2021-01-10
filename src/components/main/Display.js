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
                    
                </div>
            )
        } else {
        return (
            <div id="display">
              {this.props.standUps.map((x, index) => {
                return (
                    <StandUp deleteStandUp={(e) => this.props.deleteStandUp(e)} key={index} yesterday={x.yesterday} today={x.today} blocker={x.blocker} />
                )
                }, this)}  
              
                
            </div>
        );
    }
    }
}

export default Display;