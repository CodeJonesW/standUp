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
                        <label>Yesterday:</label>
                        <textarea rows="1"></textarea>
                    </div>
                    <div class="item">
                        <label>Today:</label>
                        <textarea rows="1"></textarea>
                    </div>
                    <div class="item">
                        <label>Blockers:</label>
                        <textarea rows="1"></textarea>
                    </div>
                    <div class="item">
                        <p>Additional comment(s):</p>
                        <textarea rows="1"></textarea>
                    </div>
                    <div class="btn-block">
                        <button type="submit" href="/">Send Complaint to HR</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default StandUpForm;