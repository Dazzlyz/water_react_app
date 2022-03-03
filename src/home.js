import { useState, useEffect } from "react";
import ReadingList from "./ReadingList";

const Home = () => {
    const [readings, setReadings] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null); 
    
    useEffect(() => {
        fetch('http://localhost:5000/recent1')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data')
                }
                return res.json();
            })
            .then(data => {
                setReadings(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        }, []);


    return ( 
        <div className="home">   
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
            {readings && <ReadingList readings={readings} title = "Past 24 hours" />}    
        </div>  
     );
}

export default Home;