import ReadingList from "./ReadingList";
import useFetch from "./usefetch";
import {apiUrl} from './constants'

// show reading in layout on screen

const Reading = ({link, name, title}) => {
    const {data: readings, isPending, error} = useFetch(`${apiUrl}${link}`);  
    
    return ( 
        <div className={name}>   
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
            {readings && <ReadingList readings={readings} title = {title} />}    
        </div>  
     );
}
 
export default Reading; 
