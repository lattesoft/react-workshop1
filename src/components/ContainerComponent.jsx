import React from "react";
import ViewComponent from "./ViewComponent";
import InputComponent from './InputComponent';

class ContainerComponent extends React.Component{ 
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    inputHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        return (
            <div>
                <InputComponent inputHandler={this.inputHandler.bind(this)}/>  
                <ViewComponent text={this.state}/>
            </div>
        )
    }
}

export default ContainerComponent;