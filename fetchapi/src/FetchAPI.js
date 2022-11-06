import { useState,useEffect } from "react"

const FetchAPI = () =>
{
    const [data,setData] = useState([]);
    const [errorStatus,setErrorStatus] = useState(false);
    const [error,setErrorMessage] = useState("");
    useEffect(() =>
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => setData(posts))
        .catch(err=>
            {
                setErrorStatus(true);
                setErrorMessage(err.message);
            })
    },[]);
    return(
        
        data.map((item)=>
        {
            
            return(
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            )
        })
    )
}
export default FetchAPI;