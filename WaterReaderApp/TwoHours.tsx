import React from 'react';
import { NativeBaseProvider} from "native-base";
import Reading from './Reading';

const TwoHours = () => {
    return (
    <NativeBaseProvider>
      <Reading
        title = 'Two hours'
        link = '/recent'        
        />         
    </NativeBaseProvider>
  );
  }

  export default TwoHours;
