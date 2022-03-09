import ReadingList from "./ReadingList";
import useFetch from "./usefetch";

const TwoHours = () => {
    const {data: readings, isPending, error} = useFetch('http://127.0.0.1:5000/recent');  
    
    return ( 
        <div className="two hours">   
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
            {readings && <ReadingList readings={readings} title = "2 Hours" />}    
        </div>  
     );
}
 
export default TwoHours;