import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedTab from './src/TabScreen/FeedTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ConectTab from './src/TabScreen/connect';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator()
const App = () => {
    return (
        <SafeAreaProvider> 
        <NavigationContainer >
            <Tab.Navigator
                
                screenOptions={({ route }) => ({
                    
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Feed') {
                            iconName = focused
                                ? 'restaurant'
                                : 'restaurant-outline';
                        } else if (route.name === 'Connect') {
                            iconName = focused ? 'wifi' : 'wifi-outline';
                        }

                        // You can return any component that you like here!
                         
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#059669",
                    tabBarInactiveTintColor: '#6ee7b7',
                })}>
                <Tab.Screen name="Feed" component={FeedTab} options={{headerShown: false}} initialParams={{ip:'NotSet' , port:5001}}/>
                <Tab.Screen  name="Connect" component={ConectTab} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    )
}
export default App