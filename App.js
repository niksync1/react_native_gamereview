import React, { useState} from 'react';
import Home from './screens/home';
import * as Font from './screens/home';
import  AppLoading  from 'expo-app-loading';
import StackApp from './routes/drawer';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontsLoader] = useFonts({
    'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/NunitoSans-Bold.ttf')
  });

  if(fontsLoaded){
    return (
      <StackApp />
    );
  }else { 
    return(
      <AppLoading
      startAsync={fontsLoader}
      onFinish={()=> setFontsLoaded(true)}
      onError={(err) => console.log(err)}
    />
    )
  }  
}

