import React, { useState} from 'react';
import Home from './screens/home';
import * as Font from './screens/home';
import  AppLoading  from 'expo-app-loading';
import Navigator from './routes/homeStack.';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/NunitoSans-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  }else { 
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
    />
    )
  }  
}

