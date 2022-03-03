const ReadingList = ({readings, title}) => {   
    
    // const data = readings
    
    // console.log(Object.entries(data));

    // const result = Object.entries(data).map(([key, value]) => {
    //     console.log(key);
    //     console.log(value);
    //     return {[key]: value};
    // });

    // console.log(result);
    
    return (
        <div className="reading-list">
            <h2>{ title }</h2>   
            {readings.map((reading) => (              
                
            <div className="reading-preview" key={reading.id}>
                     <h1>Water level: {reading.level}</h1>
                     <h2>System temperature: {reading.temperature}</h2>
                     <p>{reading.time}</p>                 
            </div>      
        ))}       
        </div>
      );
}
 
export default ReadingList;


// const obj = {
//     name: 'James',
//     country: 'Chile',
//   };
  
//   // 👇️ ['name', 'country']
//   console.log(Object.keys(obj));
  
//   const result = Object.keys(obj).map(key => {
//     console.log(key); // 👉️ name, country
//     console.log(obj[key]); // 👉️ James, Chile
  
//     return {[key]: obj[key]};
//   });
  
//   // 👇️ [{name: 'James'}, {country: 'Chile'}]
//   console.log(result);

// export default ReadingList;
