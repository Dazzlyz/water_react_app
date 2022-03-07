import { Link } from "react-router-dom";

const ReadingList = ({readings, title}) => {     
    
    return (
        <div className="reading-list">
            <h2>{ title }</h2>   
            {readings.map((reading) => (              
                
            <div className="reading-preview" key={reading.id}>
                    <Link to ={`/readings/${readings.id}`}>
                        <h1>Water level: {reading.level}</h1>
                        <h2>System temperature: {reading.temperature}</h2>
                        <p>{reading.time}</p>    
                    </Link>             
            </div>      
        ))}       
        </div>
      );
}
 
export default ReadingList;
