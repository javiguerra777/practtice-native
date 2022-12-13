import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import UserCtxProvider from './src/context/user';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import CreatePost from './src/screens/CreatePost';
import Post from './src/screens/Post';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserCtxProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
        />
        <Stack.Screen
          name="Post"
          component={Post}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UserCtxProvider>
  )
}
