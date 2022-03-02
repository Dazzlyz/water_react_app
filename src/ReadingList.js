const ReadingList = ({readings, title}) => {   
    return (
        <div className="reading-list">
            <h2>{ title }</h2>
            {readings.map((reading) => (
                <div className="reading-preview" key={reading.id}>
                     <h2>Water level: {reading.level}</h2>
                     <p>{reading.date}</p>                     
                         
              </div>      
              ))}              
        </div>
      );
}
 
export default ReadingList;
