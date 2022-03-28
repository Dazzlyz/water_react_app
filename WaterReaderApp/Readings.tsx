import ReadingList from "./ReadingList";
import useFetch from "./usefetch";
import {apiUrl} from './constants'

const Reading = (link: string, name: string, title: string) => {
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
