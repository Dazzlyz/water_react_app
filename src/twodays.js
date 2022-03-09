import ReadingList from "./ReadingList";
import useFetch from "./usefetch";

const TwoDays = () => {
    const {data: readings, isPending, error} = useFetch('http://127.0.0.1:5000/recent2');  
    
    return ( 
        <div className="twodays">   
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
            {readings && <ReadingList readings={readings} title = "2 Days" />}    
        </div>  
     );
}
 
export default TwoDays;