import { useState } from "react";

const Home = () => {
    const [readings, setReadings] = useState([
        // API readings?'
        { level: 20, date: '1-3 18.00.00', id: 1 }
    ]);

   

    return ( 
        <div className="home">   
            {readings.map((reading) => (
                <div className="reading-preview" key={reading.id}>
                    <h2>Water level: {reading.level}</h2>
                    <p>{reading.date}</p>
        
                </div>

            
            
            ))}     
               
            
        </div>
     );
}
 
export default Home;