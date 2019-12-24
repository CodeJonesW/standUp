import React, { Component } from 'react';
import StandUp from './StandUp'
import StandUpForm from './StandUpForm'

// const PROXY = "https://cors-anywhere.herokuapp.com/"

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            standUps: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/standups')
            .then(res => res.json())
            .then(data => this.setState({ standUps: data }))
    }

    render() {
        return (
            <div id="display">

                <StandUp standups={this.state.standUps} />
                <StandUpForm />


            </div>
        );
    }
}

export default Display;