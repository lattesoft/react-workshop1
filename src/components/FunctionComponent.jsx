import React,{useState,useEffect} from "react";
import Axios from 'axios';

const FunctionComponent = () => {
    const [posts,setPosts] = useState([]);
    const [isLoad,setIsLoad] = useState(false);
    

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setPosts(res.data);
            setIsLoad(true);
        });
    },[]);

    return (
        <div>
            <p>
                {isLoad ? posts.map((value,index)=>{
                return <div key={index}>{index+1} {value.title} </div>
            }) : "Is Loading..." }
            </p>
        </div>
    )
}

export default FunctionComponent;