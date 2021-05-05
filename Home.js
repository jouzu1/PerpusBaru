import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';

const Stack = createStackNavigator();

export class Home extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="App"
                        component={App} />
                    {/* <Stack.Screen
                        name="Register"
                        component={Register} />
                    <Stack.Screen
                        name="Home"
                        component={Home} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Home
