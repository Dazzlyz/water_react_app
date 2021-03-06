import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import {apiUrl} from './constants'; 

// create different layout for viewing individual readings 

const ReadingDetail = () => {
    const { id } = useParams();
    const { data: reading, error, isPending } = useFetch(`${apiUrl}/recent/` + id);
    
    return ( 
        <div className="readings-details ">
            { isPending && <div>Loading....</div>}
            {error && <div> {error} </div>}
            { reading && (
                <div>
                    <h1>Water level: {reading.level}</h1>                    
                    <p>{reading.time}</p>  
                    <h2>System temperature - {reading.temperature}</h2>      
                    <h2>Reading ID - { id }</h2>            
                </div>
            )}            
        </div>
     );
}
 
export default ReadingDetail;