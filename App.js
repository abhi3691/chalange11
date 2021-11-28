import React from 'react'
import Register from './src/Register'
import OTP     from './src/OTP'
import StudentDetails from './src/StudentDetails'
import School_Board from './src/School_Board'
import AppTour from './src/AppTour'
import Home from './src/Taps/Home'
import Recent from './src/Taps/Recent'
import Exams from './src/Taps/Exams'
import profile from './src/Taps/profile'
import Contact from './src/Taps/Contact'
import Course from './src/Course'
import {Image, View,Text} from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'


const Stack = createStackNavigator()
const Tab   = createBottomTabNavigator() 
const Drawer = createDrawerNavigator() 

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

<Stack.Screen 
  name ='AppTour'
  component={AppTour}
  options ={{headerShown:false}}
  />

<Stack.Screen 
  name ='Tab'
  component={MyTab}
  options ={{headerShown:false}}
 
  />

<Stack.Screen 
  name ='Drawer'
  component={MyDrawer}
  
  options ={{headerShown:false,}}
 
  />

<Stack.Screen 
  name ='Course'
  component={Course}
  
  options ={{headerShown:false,}}
 
  />

</Stack.Navigator>
 )
}

function MyTab(){
  return(
    <Tab.Navigator
    screenOptions ={{
     
      tabBarLabelStyle :{fontSize :8},
      tabBarItemStyle  :{width:100,alignItems:'center',justifyContent:'center'},
      tabBarStyle:{
        backgroundColor:'#fff',
        position:'absolute',
        bottom:30,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:'#EEEEEE',
        height:74,
        width:343,
        borderRadius:8,
        
      },
      tabBarShowLabel:false,
      headerShown:false
}

}
   

  
    
    >
      <Tab.Screen
      
      name ='Home'
      component={Home}
     
      options={{tabBarIcon :({focused})=>{
        
        return(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          
   
         
          {focused ? 
          <View style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={require('./assets/Path82.png')} style={{ width: 15, height: 16.83}} />
         <Image source={require('./assets/Ellipse22.png')} style={{marginTop:3, width: 4, height: 4}} />
         </View>
          :
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:30}}>
          <Image source={require('./assets/Path82.png')} style={{ width: 15, height: 16.83}} />
          <Text style={{fontSize:8,paddingLeft:10,width:35}}>Home</Text>
          
          </View>

         
         }
          
         
          </View>
        
        )
        
      
      
        
       } ,
       
      
      tabBarLabelPosition:'beside-icon',
      tabBarActiveTintColor:'#00202F',
      tabBarInactiveTintColor:'#C2C2C2',
    
     
     
    
    
    }

    }
      />
      <Tab.Screen
      name ='Recent'
      component={Recent}
      options={{tabBarIcon :({focused})=>{
        
        return(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          {focused ?
            
            <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./assets/Polygon3.png')} style={{ width: 17, height: 20,}}  />
          <Image source={require('./assets/Ellipse22.png')} style={{marginTop:3, width: 4, height: 4}} />
          </View>
            :
          
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('./assets/Polygon3.png')} style={{ width: 17, height: 20}}  />
          <Text style={{fontSize:8,paddingLeft:10,width:35,paddingTop:10}}>Recent</Text>
          </View>
          
          
        }
        </View>
      
      )
      
      } ,

      tabBarLabelPosition:'beside-icon',
      tabBarActiveTintColor:'#00202F',
      tabBarInactiveTintColor:'#C2C2C2',
      
    
    
    }

    }
      />
      <Tab.Screen
      name ='Exams'
      component={Exams}
      options={{tabBarIcon :({focused})=>{
        
        return(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          {focused ?
            
            <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./assets/Group360.png')} style={{ width: 16, height: 18}}  />
          <Image source={require('./assets/Ellipse22.png')} style={{marginTop:3, width: 4, height: 4}} />
          </View>
            :
          
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('./assets/Group360.png')} style={{ width: 16, height: 18}}  />
          <Text style={{fontSize:8,paddingLeft:10,width:35}}>Exams</Text>
          </View>
          
          
        }
        </View>
      
      )
      
      } ,
      tabBarLabelPosition:'beside-icon',
      tabBarActiveTintColor:'#00202F',
      tabBarInactiveTintColor:'#C2C2C2',
     
      
    
    
    }

    }
      />
      <Tab.Screen
      name ='Profile'
      component={profile}
      options={{tabBarIcon :({focused})=>{
        
        return(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          {focused ?
            
            <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./assets/Group363.png')} style={{ width: 18, height: 17,}}  />
          <Image source={require('./assets/Ellipse22.png')} style={{marginTop:3, width: 4, height: 4}} />
          </View>
            :
          
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('./assets/Group363.png')} style={{ width: 18, height: 17}}  />
          <Text style={{fontSize:8,paddingLeft:10,width:35}}>Profile</Text>
          </View>
          
          
        }
        </View>
      
      )
      
      } ,
      tabBarLabelPosition:'beside-icon',
      tabBarActiveTintColor:'#00202F',
      tabBarInactiveTintColor:'#C2C2C2'
    
    
    }

    }
      />
      <Tab.Screen
      name ='Contact'
      component={Contact}
      options={{tabBarIcon :({focused})=>{
        
        return(
          <View style={{alignItems:'center',justifyContent:'center'}}>
          {focused ?
            
            <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./assets/Group364.png')} style={{ width: 20, height: 16}}  />
          <Image source={require('./assets/Ellipse22.png')} style={{marginTop:3, width: 4, height: 4}} />
          </View>
            :
          
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('./assets/Group364.png')} style={{ width: 20, height: 16}}  />
          <Text style={{fontSize:8,paddingLeft:10,width:38}}>Contact</Text>
          </View>
          
          
        }
        </View>
      
      )
      
      } ,
      tabBarLabelPosition:'beside-icon',
      tabBarActiveTintColor:'#00202F',
      tabBarInactiveTintColor:'#C2C2C2'
    
    
    }

    }
      />
    </Tab.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
    screenOptions ={{
      headerShown:false
      
    }}
    >
      <Drawer.Screen
      name ='Tab'
      component={MyTab}
      />
      <Drawer.Screen
      name ='Exam Corner'
      component={Exams}
      />


    </Drawer.Navigator>
  )
}

export default function App (){
return (
  <NavigationContainer>
  
  <MyStack/>
</NavigationContainer>
)
}