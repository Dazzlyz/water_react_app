import React from 'react';
import { NativeBaseProvider} from "native-base";
import Reading from './Reading';

const TwoDays = () => {
    return (
    <NativeBaseProvider>
      <Reading
        title = 'Two days'
        link = '/recent2'        
        />         
    </NativeBaseProvider>
  );
  }

  export default TwoDays;
