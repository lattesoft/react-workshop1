import React from "react";

class ViewComponent extends React.Component{ 
    render() {
        return (
            <div>
               <p>{this.props.text.firstName}</p>
               <p>{this.props.text.lastName}</p>
            </div>
        )
    }
}

export default ViewComponent;