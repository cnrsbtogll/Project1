import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeScreen, TaskScreen, AddTaskScreen, CompletedScreen,  ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
   <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    <Tab.Screen name="Home" component={HomeScreen} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }}/>
    <Tab.Screen name="Task" component={TaskScreen} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="format-list-checks" color={color} size={size} />
      ),
    }}/>
    <Tab.Screen name="AddTask" component={AddTaskScreen} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="plus-circle" color={color} size={size * 2} />
      ),
    }}/>
    <Tab.Screen name="Completed" component={CompletedScreen} 
     options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="check-all" color={color} size={size} />
      ),
    }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} 
    
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
      ),
    }}/>
   </Tab.Navigator>
  )
}

export default UserStack