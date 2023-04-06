import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import About from "../screens/about";
import Home from "../screens/home";
import ReviewDetails from '../screens/reviewDetails';

const Drawer = createDrawerNavigator();

const DrawTabs = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen  name="Home" component={Home} />
      <Drawer.Screen  name="About" component={About}/>

    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function StackApp() {
    return (
      <NavigationContainer>
        <Stack.Navigator>          
          <Stack.Screen name="Tabs" component={DrawTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackApp;
  
