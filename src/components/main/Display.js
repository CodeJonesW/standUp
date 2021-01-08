import React, { Component } from 'react';
import StandUp from './StandUp'
import StandUpForm from './StandUpForm'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            standUps: []
        }
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/api/standup')
    //         .then(res => res.json())
    //         .then(data => this.setState({ standUps: data }))
    // }

    render() {
        return (
            <div id="display">
                {this.state.standUps.map((x, index) => (
                    <StandUp key={index} yesterday={x.yesterday} today={x.today} blocker={x.blocker} />
                ))}
                
                <StandUpForm handleSubmit={(e) => this.props.handleSubmit(e)}/>


            </div>
        );
    }
}

export default Display;