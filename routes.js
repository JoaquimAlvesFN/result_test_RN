import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import reducer from './src/redux/reducers/index';

import HomeScreen from './src/pages/Home';
import ProfileScreen from './src/pages/Profile';
import ChatScreen from './src/pages/Chat';
import ProfileFriend from './src/pages/ProfileFriend';

let store = createStore(reducer);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

LogBox.ignoreLogs(['Expected style', 'Each child in a list']);

function Tabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#7159c1',
            tabStyle: {
                backgroundColor: '#FFF'
            }
        }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="user" solid size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#7159c1" barStyle="default"/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerTintColor: '#FFF',
                    headerStyle: {
                        backgroundColor: '#7159c1'
                    }
                }}>
                    <Stack.Screen 
                        name="Tabs" 
                        component={Tabs} 
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen 
                        name="ProfileFriend" 
                        component={ProfileFriend}
                        options={{
                            title: ''
                        }}
                    />
                    <Stack.Screen 
                        name="Chat" 
                        component={ChatScreen}
                        options={{
                            title: ''
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


