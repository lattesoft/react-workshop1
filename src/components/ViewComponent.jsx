import React from "react";

function ViewComponent({text,title}){
    return (
        <div>
            {title}
           <p>{text.firstName}</p>
           <p>{text.lastName}</p>
        </div>
    )
}

export default ViewComponent;