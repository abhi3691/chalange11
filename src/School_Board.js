import React,{ Component } from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableHighlight,ImageBackground } from 'react-native';

import { Picker } from '@react-native-picker/picker';



export default class School_Board extends Component  {
  constructor(){
    super();
    this.state ={
      selectedLabel :'',
      selectedLabel2:'',
     flag1:false,
     flag2:false,
  
  };
    
  }
 Show1 =(value) =>{
   if(value !== 'disabled1'){
   this.setState({
    flag1 :true,
    selectedLabel :value,
    
    
    });
}

 };
 Show2 =(value) =>{
    if(value !== 'disabled2'){
    this.setState({
     
        selectedLabel2 :value,
     
     flag2:true
     });
 }
};
  render(){ 
   
    
    
  return (
      
    <View style={styles.container}>
        <View style={{height:'20%',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
        <Image source ={require('../assets/inmakeslogo.png')}  style={styles.ImageStyle} />
        </View>
        <View style={{height:'20%',alignItems:'center',justifyContent:'center'}}>
        <View style={{backgroundColor:'#eee',width:150,height:150,borderRadius:100}} >
            
           
        <ImageBackground source ={require('../assets/Group385.png')}  style={{alignItems:'center',justifyContent:'center',height:150,width:150,}} >
            <Text style={{fontSize:18,fontWeight:'600',color:'#000'}} >ICON</Text>
        </ImageBackground>
            
        
        </View>
        </View>
        <View style={{justifyContent:'space-between'}} >
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.enterMobileNoStyle} >Select you school board</Text>
      
        </View>
        </View>
        
        <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',height:'35%'}}>
        <View style={styles.rectangle1}>
            <View style={styles.mobileNoStyle} >
               
             
               <Picker style={[styles.inputTextStyle2,{ color: this.state.flag1 ? "#fff" : "#446270" }]}
               
               selectedValue ={this.state.selectedLabel}
              onValueChange ={this.Show1.bind()}
              mode='dropdown' 
              dropdownIconColor ='#446270'
              
              >
                 
                 <Picker.Item label="Select board " value = "disabled1" style ={{color:'#446270'}} />
                 <Picker.Item label="CBSC" value = "CBSC"   />
                 <Picker.Item label="STATE" value = "STATE" />
                 <Picker.Item label="ICIC" value = "ICIC" />
                 
               
               </Picker>
               
               <Picker style={[styles.inputTextStyle2,{ color: this.state.flag2 ? "#fff" : "#446270" }]}
               
               selectedValue ={this.state.selectedLabel2}
              onValueChange ={this.Show2.bind()}
              mode='dropdown' 
              dropdownIconColor ='#446270'
              
              >
                 
                 <Picker.Item label="Select class " value = "disabled2" style ={{color:'#446270'}} />
                 <Picker.Item label="one" value = "one"   />
                 <Picker.Item label="Two" value = "Two" />
                 <Picker.Item label="Three" value = "Three" />
                 <Picker.Item label="Four" value = "Four" />

                 
               
               </Picker>
           
                            
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight style={styles.ButtonStyle} onPress ={()=> this.props.navigation.navigate('AppTour') } >
                    <Text style={{color:'#fff',fontSize:18,alignItems:'center'}}>Continue</Text>
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
      height:300,
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
   

      inputTextStyle2:{
        backgroundColor:'#062E40',
        alignItems:'center',
       paddingLeft:20,
        justifyContent:'center',
        borderWidth:1,
        width:'90%',
        marginTop:20,
        height:50,
        borderRadius:4,
       
        elevation:4,
        fontSize:20,
        marginRight:10,
        
        
        
    
    
    
   
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