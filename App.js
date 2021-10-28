import React from 'react'

import Register from './src/Register'
import OTP     from './src/OTP'
import StudentDetails from './src/StudetDetails'
import School_Board from './src/School_Board'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

function MyStack (){
 return (
  <Stack.Navigator>
  <Stack.Screen 
  name ='Register'
  component={Register}
  options ={{headerShown:false}}
  />

  <Stack.Screen 
  name ='OTP'
  component={OTP}
  options ={{headerShown:false}}
  />

  
<Stack.Screen 
  name ='StudentDetails'
  component={StudentDetails}
  options ={{headerShown:false}}
  />

  
<Stack.Screen 
  name ='School_Board'
  component={School_Board}
  options ={{headerShown:false}}
  />
</Stack.Navigator>
 )
}

export default function App (){
return (
  <NavigationContainer>
  <MyStack/>
</NavigationContainer>
)
}