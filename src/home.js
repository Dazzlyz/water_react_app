import { useState, useEffect } from "react";
import ReadingList from "./ReadingList";

const Home = () => {
    const [readings, setReadings] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000', {
            mode: 'no-cors'
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReadings(data);
            });   
        }, []);


    return ( 
        <div className="home">   
            {readings && <ReadingList readings={readings} title = "All readings!" />}    
        </div>  
     );
}

export default Home;