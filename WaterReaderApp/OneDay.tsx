import React from 'react';
import { NativeBaseProvider} from "native-base";
import Reading from './Reading';

const OneDay = () => {
    return (
    <NativeBaseProvider>
      <Reading
        title = 'One day'
        link = '/recent1'        
        />         
    </NativeBaseProvider>
  );
  }

  export default OneDay;
