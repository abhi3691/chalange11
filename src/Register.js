import React,{ Component } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableHighlight } from 'react-native';

export default class Register extends Component  {

  constructor(){
    super();
    this.state ={
      countryCode :'+91',
      mobileNo : ''
    }
  }

  UpdateValue(userMobileNo){
    this.setState({mobileNo : userMobileNo})
   
  }
  UpdateValue2(userCountryCode){
    
    this.setState({countryCode : userCountryCode})
  }

  render(){ 
  return (
    <View style={styles.container}>
        <View style={{height:'50%',alignItems:'center',justifyContent:'center'}}>
        <Image source ={require('../assets/inmakeslogo.png')}  style={styles.ImageStyle} />
        </View>
        <View style={{justifyContent:'space-between'}} >
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.enterMobileNoStyle} >Enter your mobile number</Text>
         <Text style={{fontSize:14,color:'#9F9F9F',fontFamily:'Gilroy-Regular'}} >We will send you an OTP to verify.</Text>
        </View>
        </View>
        
        <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',height:'20%'}}>
        <View style={styles.rectangle1}>
            <View style={styles.mobileNoStyle} >
               
                <TextInput style={styles.CountryText} 
               
                onChangeText={(userCountryCode) => this.UpdateValue2(userCountryCode) } defaultValue ='+91'
                > </TextInput>
                <TextInput style={styles.mobileText} placeholder='Mobile number' placeholderTextColor='#446270' keyboardType='phone-pad' 
                onChangeText={(userMobileNo) => this.UpdateValue(userMobileNo) }
                ></TextInput>
              
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
            <TouchableHighlight style={styles.ButtonStyle} onPress ={()=> this.props.navigation.navigate('OTP',{userMobileNo:this.state.mobileNo,userCountryCode:this.state.countryCode}) } >
                    <Text style={{color:'#fff',fontSize:18,alignItems:'center'}} >Continue</Text>
                </TouchableHighlight>
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
      fontWeight:'600',
      fontSize:20,
      color:'#002333',


  },
  rectangle1:{
      backgroundColor:'#002333',
      height:250,
      width:'100%',
      borderTopLeftRadius:16,
      borderTopRightRadius:16,
      marginTop:30,
      justifyContent:'space-around'
      

      
  },
  mobileNoStyle:{
   alignItems:'center',
   justifyContent:'center',
   flexDirection:'row',

  },
  ImageStyle:{
      width :300,
       alignItems:'center',
       justifyContent:'center',
       height:70,
       marginTop:30,
       marginBottom:30
    },
  CountryText:{
    backgroundColor:'#062E40',
    alignItems:'center',
    padding:20,
    justifyContent:'center',
    borderWidth:1,
    width:'20%',
    marginTop:20,
    height:60,
    borderRadius:4,
    borderColor:'#13394A',
    elevation:4,
    fontSize:20,
    marginRight:10,
    color:'#fff'
  },
  mobileText:{
    backgroundColor:'#062E40',
    alignItems:'center',
    padding:20,
    justifyContent:'center',
    borderWidth:1,
    width:'70%',
    marginTop:20,
    height:60,
    borderRadius:4,
    borderColor:'#13394A',
    elevation:4,
    fontSize:20,
    color:'#fff'
  },
  ButtonStyle:{
      backgroundColor:'#00C458',
      borderRadius:4,
      width:'92%',
      alignItems:'center',
      justifyContent:'center',
      height:60,
      marginTop:20,
      marginBottom:40,
      

  }

})