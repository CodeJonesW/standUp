import React, { Component } from 'react';

class StandUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="standUpFormDiv">
                <form onSubmit={(e) => this.props.handleSubmit(e)} id="standUpForm" action="/">
                    <div className="item">
                        <textarea id="yesterday" placeholder="Yesterday:" rows="2"></textarea>
                    </div>
                    <div className="item">
                        <textarea id="today" placeholder="Today:" rows="2"></textarea>
                    </div>
                    <div className="item">
                        <textarea id="blocker" placeholder="Blockers:" rows="2"></textarea>
                    </div>
                    {/* <div className="item">
                        Seeking help?<input name="help" type="checkbox" />
                        PR needs Review<input name="PR" type="checkbox" />
                    </div> */}
                    <div className="btn-block">
                        <button className="mybutton" id="formBtn" style={{"margin": "5%"}} type="submit" >standUp</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default StandUpForm;