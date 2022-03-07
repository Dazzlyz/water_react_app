import ReadingList from "./ReadingList";
import useFetch from "./usefetch";

const Home = () => {
    const {data: readings, isPending, error} = useFetch('http://127.0.0.1:5000/recent1');  
    
    return ( 
        <div className="home">   
            {error && <div>{ error }</div>}
            {isPending && <div>Loading......</div>}
            {readings && <ReadingList readings={readings} title = "Past 24 hours" />}    
        </div>  
     );
}

export default Home;