import { Button, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const Home = ( {navigation} ) => {
    const dimensions = Dimensions.get('window');   

    return(
    <Image source={require('./assets/plant.jpg')} style={{ height: 500, width: dimensions.width }} />     
                
    );
}

export default Home;