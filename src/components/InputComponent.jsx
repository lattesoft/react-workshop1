import React from "react";

class InputComponent extends React.Component{ 
    render() {
        return (
            <div>
                <p><input onChange={this.props.inputHandler.bind(this)} name="firstName" type="text"/></p>
                <p><input onChange={this.props.inputHandler.bind(this)} name="lastName" type="text"/></p>
            </div>
        )
    }
}

export default InputComponent;