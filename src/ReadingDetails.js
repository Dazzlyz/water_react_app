import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const ReadingDetail = () => {
    const { id } = useParams();
    const { data: reading, error, isPending } = useFetch('http://localhost:5000/recent/' + id);
    const navigate = useNavigate()

    // const handleClick = () => {
    //     fetch('http://localhost:5000/readings/' + reading.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         navigate('/')
    //     })
    // }

    return ( 
        <div className="readings-details ">
            { isPending && <div>Loading....</div>}
            {error && <div> {error} </div>}
            { reading && (
                <reading>
                    <h1>Water level: {reading.level}</h1>                    
                    <p>{reading.time}</p>   
                    <button>Delete</button>
                </reading>
            )}
            <h2>Reading Details - { id }</h2>
        </div>
     );
}
 
export default ReadingDetail;