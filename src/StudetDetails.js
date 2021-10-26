import React,{ Component,useState } from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableHighlight,ImageBackground ,} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown'


export default class StudentDetails extends Component  {
 
  render(){ 
    

  return (
      
    <View style={styles.container}>
        <View style={{height:'10%',alignItems:'center',justifyContent:'center',marginTop:30}}>
        <Image source ={require('../assets/inmakeslogo.png')}  style={styles.ImageStyle} />
        </View>
        <View style={{height:'20%',alignItems:'center',justifyContent:'flex-start'}}>
        <View style={{backgroundColor:'#eee',width:150,height:150,borderRadius:100}} >
            
           
        <ImageBackground source ={require('../assets/Group385.png')}  style={{alignItems:'center',justifyContent:'center',height:150,width:150,}} >
            <Text style={{fontSize:18,fontWeight:'600',color:'#000'}} >ICON</Text>
        </ImageBackground>
            
        
        </View>
        </View>
        <View style={{justifyContent:'space-between'}} >
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.enterMobileNoStyle} >Student details</Text>
      
        </View>
        </View>
        
        <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',height:'60%'}}>
        <View style={styles.rectangle1}>
            <View style={styles.mobileNoStyle} >
               
                <TextInput style={styles.inputTextStyle} keyboardType='name-phone-pad' placeholder='Full name' placeholderTextColor='#446270'  ></TextInput>
                <TextInput style={styles.inputTextStyle} keyboardType= 'email-address' placeholder='Email' placeholderTextColor='#446270' ></TextInput>
                <TextInput style={styles.inputTextStyle} keyboardType='number-pad' ></TextInput>
                <TextInput style={styles.inputTextStyle} keyboardType='number-pad' ></TextInput>
           

              
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight style={styles.ButtonStyle} onPress ={()=> this.props.navigation.navigate('OTP') } >
                    <Text style={{color:'#fff',fontSize:18,alignItems:'center'}}>Register</Text>
                </TouchableHighlight>
          
                </View  >
            </View>
        </View>
        </View>

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterMobileNoStyle:{
      fontFamily:'Gilroy',
      fontWeight:'800',
      fontSize:25,
      color:'#002333',
      marginTop:30,


  },
  rectangle1:{
      backgroundColor:'#002333',
      height:450,
      width:'100%',
      borderTopLeftRadius:16,
      borderTopRightRadius:16,
      marginTop:30,
      //justifyContent:'space-around'
      

      
  },
  mobileNoStyle:{
   alignItems:'center',
   justifyContent:'center',
  // flexDirection:'row',
   marginTop:20,
   marginBottom:20,


  },
  ImageStyle:{
      width :200,
       alignItems:'center',
       justifyContent:'center',
       height:45,
       
       marginBottom:30
    },
    inputTextStyle:{
    backgroundColor:'#062E40',
    alignItems:'center',
   paddingLeft:20,
    justifyContent:'center',
    borderWidth:1,
    width:'90%',
    marginTop:20,
    height:50,
    borderRadius:4,
    borderColor:'#13394A',
    elevation:4,
    fontSize:20,
    marginRight:10,
    color:'#fff',
    
  },

  ButtonStyle:{
      backgroundColor:'#00C458',
      borderRadius:4,
      width:'92%',
      alignItems:'center',
      justifyContent:'center',
      height:60,
      marginTop:20,
    marginBottom:10,
      

  }

})