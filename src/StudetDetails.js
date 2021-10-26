import React,{ Component,useState } from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableHighlight,ImageBackground ,} from 'react-native';

import { Picker } from '@react-native-picker/picker';



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
               <Picker style={styles.inputTextStyle} 
            
               >
                 
                 <Picker.Item   label="Assam" value = "Assam" />
                 <Picker.Item label="Goa" value = "Goa" />
                 <Picker.Item label="Madhya Pradesh" value = "Madhya Pradesh" />
                 <Picker.Item label="Meghalaya" value = "Meghalaya" />
                 <Picker.Item label="Mizoram" value = "Mizoram" />
                 <Picker.Item label="Delhi" value = "Delhi" />
                 <Picker.Item label="Sikkim" value = "Sikkim" />
                 <Picker.Item label="Andhra Pradesh" value = "Andhra Pradesh" />
                 <Picker.Item label="Arunachal Pradesh" value = "Arunachal Pradesh" />
                 <Picker.Item label="Bihar" value = "Bihar" />
                 <Picker.Item label="Chhattisgarh" value = "Chhattisgarh" />
                 <Picker.Item label="Gujarat" value = "Gujarat" />
                 <Picker.Item label="Haryana" value = "Haryana" />
                <Picker.Item label="Himachal Pradesh" value = "Himachal Pradesh" />
                <Picker.Item label="Jammu and Kashmir" value = "Jammu and Kashmir" />
                <Picker.Item label="Himachal Pradesh" value = "Himachal Pradesh" />
                <Picker.Item label="Jharkhand" value = "Jharkhand" />
                <Picker.Item label="Karnataka" value = "Karnataka" />
                <Picker.Item label="Kerala" value = "Kerala" />
                <Picker.Item label="Maharashtra" value = "Maharashtra" />
                <Picker.Item label="Nagaland" value = "Nagaland" />
                <Picker.Item label="Odisha" value = "Odisha" />
                <Picker.Item label="Punjab" value = "Punjab" />
                <Picker.Item label="Odisha" value = "Odisha" />
                <Picker.Item label="Rajasthan" value = "Rajasthan" />
                <Picker.Item label="Tamil Nad" value = "Tamil Nad" />
                <Picker.Item label="Uttarakhand" value = "Uttarakhand" />
                <Picker.Item label="Telangana" value = "Telangana" />
                <Picker.Item label="Tripura" value = "Tripura" />
                <Picker.Item label="Telangana" value = "Telangana" />
                <Picker.Item label="Andaman and Nicobar Islands" value = "Andaman and Nicobar Islands" />
                <Picker.Item label="Chandigarh" value = "Chandigarh" />
                <Picker.Item label="Dadra and Nagar Haveli" value = "Dadra and Nagar Haveli" />
                <Picker.Item label="Daman and Di" value = "Daman and Di" />
                <Picker.Item label="Lakshadweep" value = "Lakshadweep" />
                <Picker.Item label="Puducherry" value = "Puducherry" />
                <Picker.Item label="Uttar Pradesh" value = "Uttar Pradesh" />
                <Picker.Item label="West Bengal" value = "West Bengal" />

               </Picker>
               <TextInput style={styles.inputTextStyle} keyboardType='number-pad' placeholder='Pin Code' placeholderTextColor='#446270'  ></TextInput>
           

              
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