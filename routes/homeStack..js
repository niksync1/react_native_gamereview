import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'GameZone',
            // headerStyle: {backgroundColor: '#333'}
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{
            title: 'ReviewDetails',
            // headerStyle: {backgroundColor: '#333'}
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 60}
    }
});

export default createAppContainer(HomeStack);