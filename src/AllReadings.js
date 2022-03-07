import ReadingList from "./ReadingList";
import useFetch from "./usefetch";

const AllReadings = () => {
    const {data: readings, isPending, error} = useFetch('http://127.0.0.1:5000/readings');  
    
    return ( 
        <div className="allreadings">   
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
            {readings && <ReadingList readings={readings} title = "All readings" />}    
        </div>  
     );
}
 
export default AllReadings;