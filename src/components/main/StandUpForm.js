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
                    <div className="item">
                        <textarea placeholder="Yesterday:" rows="2"></textarea>
                    </div>
                    <div className="item">
                        <textarea placeholder="Today:" rows="2"></textarea>
                    </div>
                    <div className="item">
                        <textarea placeholder="Blockers:" rows="2"></textarea>
                    </div>
                    <div className="item">
                        Seeking help?<input name="help" type="checkbox" />
                        PR needs Review<input name="PR" type="checkbox" />
                    </div>
                    <div className="btn-block">
                        <button type="submit" href="/">standUp</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default StandUpForm;