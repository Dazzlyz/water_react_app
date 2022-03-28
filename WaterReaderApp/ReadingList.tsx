import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ReadingList = ({readings, title}) => {     
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.screen>
                <div className="reading-list">
                    <h2>{ title }</h2>   
                    {readings.map((reading) => (              
                        
                    <div className="reading-preview" key={reading.id}>
                            <Link to ={`/readings/${reading.id}`}>
                                <h1>Water level: {reading.level}</h1>
                                <h2>System temperature: {reading.temperature}</h2>
                                <p>{reading.time}</p>    
                            </Link>             
                    </div>      
                ))}       
                </div>
                </Stack.screen>
            </Stack.Navigator>
        </NavigationContainer>
      );
}
 
export default ReadingList;