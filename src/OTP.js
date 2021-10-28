import React,{ useRef,useState } from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableHighlight,ImageBackground } from 'react-native';


const OTP =(
  {route :{
    params :{userMobileNo},
    params:{userCountryCode}
    
  },
  navigation
},

)=>{

  const firstInput  = useRef();
  const secondInput = useRef();
  const thirdInput  = useRef();
  const fourthInput = useRef();
  const fifthInput  = useRef();
  const sixthInput  = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '',5:'',6:''});
 
  return (
    <View style={styles.container}>
        <View style={{height:'25%',alignItems:'center',justifyContent:'center',marginTop:30}}>
        <Image source ={require('../assets/inmakeslogo.png')}  style={styles.ImageStyle} />
        </View>
        <View style={{height:'25%',alignItems:'center',justifyContent:'center'}}>
        <View style={{backgroundColor:'#eee',width:150,height:150,borderRadius:100,marginBottom:120}} >
            
        
        <ImageBackground source ={require('../assets/Group385.png')}  style={{alignItems:'center',justifyContent:'center',height:150,width:150,}} >
            <Text style={{fontSize:18,fontWeight:'600',color:'#000'}} >ICON</Text>
        </ImageBackground>
            
        
        </View>
        </View>
        <View style={{justifyContent:'space-between'}} >
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.enterMobileNoStyle} >Verification code</Text>
         <Text style={{fontSize:14,color:'#9F9F9F',fontFamily:'Gilroy-Regular'}} >Please type the verification code sent to</Text>
         <View style ={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
            <Text style={{fontSize:18,color:'#002333',fontFamily:'Gilroy-Regular',fontWeight:'900',marginTop:30}} > {userCountryCode}  {userMobileNo} </Text>
            
              
          </View> 
        </View>
        </View>
        
        <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',height:'50%'}}>
        <View style={styles.rectangle1}>
            <View style={styles.mobileNoStyle} >
               
                <TextInput style={styles.OTPTextStyle}
                 keyboardType='number-pad'
                  maxLength={1}
                   ref ={firstInput}
                   onChangeText={text => {
                    setOtp({...otp, 1: text});
                    text && secondInput.current.focus();
                  }}
                
                ></TextInput>
                <TextInput 
                style={styles.OTPTextStyle}
                 keyboardType='number-pad'
                  maxLength={1} 
                  ref={secondInput} 
                  onChangeText={text => {
                    setOtp({...otp, 2: text});
                    text ? thirdInput.current.focus() : firstInput.current.focus();
                  }}
                  ></TextInput>
                <TextInput 
                style={styles.OTPTextStyle}
                 keyboardType='number-pad'
                  maxLength={1} 
                  ref ={thirdInput} 
                  onChangeText={text => {
                    setOtp({...otp, 3: text});
                    text ? fourthInput.current.focus() : secondInput.current.focus();
                  }}
                  >
                   
                  </TextInput>
                <TextInput
                 style={styles.OTPTextStyle}
                  keyboardType='number-pad'
                   maxLength={1}
                    ref ={fourthInput}
                    onChangeText={text => {
                      setOtp({...otp, 4: text});
                      text ? fifthInput.current.focus() : thirdInput.current.focus();
                    }}
                     >

                     </TextInput>
                <TextInput
                 style={styles.OTPTextStyle}
                  keyboardType='number-pad'
                   maxLength={1}
                    ref ={fifthInput}
                    onChangeText={text => {
                      setOtp({...otp, 5: text});
                      text ? sixthInput.current.focus() : fourthInput.current.focus();
                    }}
                    >

                    </TextInput>
                <TextInput
                 style={styles.OTPTextStyle}
                  keyboardType='number-pad' maxLength={1}
                   ref={sixthInput}
                   onChangeText={text => {
                    setOtp({...otp, 6: text});
                    !text && fifthInput.current.focus();
                  }}
                   ></TextInput>

              
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight style={styles.ButtonStyle} onPress ={()=> navigation.navigate('StudentDetails') } >
                    <Text style={{color:'#fff',fontSize:18,alignItems:'center'}}>Resend OTP</Text>
                </TouchableHighlight>
                <Text style={{color:'#446270',fontSize:14}} >Resend after 28s</Text>
                </View  >
                <View style={{width:'100%',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:20}} >
                    <Image source={require('../assets/Union1.png')} style={{height:30,width:20}}  />
                    <Text style={{color:'#00C458', fontSize:20,fontFamily:'Gilroy',paddingLeft:10}} >Contact Us</Text>
                </View>
            </View>
        </View>
        </View>

    </View>
  )
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
   flexDirection:'row',
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
    OTPTextStyle:{
    backgroundColor:'#062E40',
    alignItems:'center',
    paddingLeft:20,
    justifyContent:'center',
    borderWidth:1,
    width:'12%',
    marginTop:20,
    height:50,
    borderRadius:4,
    borderColor:'#13394A',
    elevation:4,
    fontSize:20,
    marginRight:10,
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
    marginBottom:10,
      

  }

})

export default OTP;