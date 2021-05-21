import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/components/Login';
import { NewApp } from './src/components/NewApp';
import Home from './src/components/Home';
import Welcome from './src/components/Welcome';
import LoginHome from './src/components/LoginHome';


const Stack = createStackNavigator();


export class App extends Component {
    render() {
        return (
            // <View>
            //     {/* <LoginForm name="Briliando" /> */}
            //     <Login/>
            // </View>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Login" component={Login}></Stack.Screen>
                    <Stack.Screen name="NewApp" component={NewApp}></Stack.Screen> */}
                    <Stack.Screen name="LoginHome" component={LoginHome}></Stack.Screen>
                    {/* <Stack.Screen name="Home" component={Home}></Stack.Screen>
                    <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App
