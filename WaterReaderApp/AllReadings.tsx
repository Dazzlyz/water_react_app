import React from 'react';
import {NativeBaseProvider} from "native-base";
import Reading from './Reading';

const AllReadings = () => {
  return (
    <NativeBaseProvider>
      <Reading
        title = 'All readings'
        link = '/readings'        
        />         
    </NativeBaseProvider>
  );
  }

export default AllReadings;
