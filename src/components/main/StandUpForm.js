import React, { Component } from 'react';

class StandUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="standUpFormDiv">
                <form id="standUpForm" action="/">
                    <div class="item">

                        <textarea placeholder="Yesterday:" rows="1"></textarea>
                    </div>
                    <div class="item">

                        <textarea placeholder="Today:" rows="1"></textarea>
                    </div>
                    <div class="item">

                        <textarea placeholder="Blockers:" rows="1"></textarea>
                    </div>
                    <div class="item">
                        <p>Additional comment(s): </p>
                        <textarea rows="1"></textarea>
                    </div>
                    <div class="btn-block">
                        <button type="submit" href="/">standUp</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default StandUpForm;