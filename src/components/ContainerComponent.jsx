import React,{useState,useEffect} from "react";
import ViewComponent from "./ViewComponent";
import InputComponent from './InputComponent';
import Axios from 'axios';

// class ContainerComponent extends React.Component{ 
//     constructor(){
//         super();
//         this.state = {
//             data: []
//         }
//     }

//     componentDidMount(){
//         Axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=>{
//             this.setState({
//                 data: res.data
//             });
//         }).then();
//     }

//     async componentDidMount(){
//         const res1 = await Axios.get("https://jsonplaceholder.typicode.com/posts");
//         const res2 = await Axios.get("https://jsonplaceholder.typicode.com/posts");
//         this.setState({
//             data1: res1.data,
//             data2: res2.data
//         });
//     }


//     render() {

//         return (
//             <div>
        
//             </div>
//         )
//     }
// }


const  ContainerComponent = () => {
    const [data,setData] = useState([]);

    // useEffect(()=>{
    //     Axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then((res)=>{
    //             setData(res.data);
    //             console.log(res.data);
    //         });
    
    // },[]);
    
    return (
        <div>
            <div>hh</div>
           {data.map((post,index)=>{
           return <div key={index}>{post.title}</div>
           })}
        </div> 
    )
}

export default ContainerComponent;