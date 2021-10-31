import React,{ Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableHighlight} from 'react-native';


export default class AppTour extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
      <View style={{margin:20, height:'65%' ,width:'90%',alignItems:'center',justifyContent:'center', borderRadius:12,backgroundColor:'#F3F3F3'}}>
        <Text style ={{color:'#000',fontSize:12,fontWeight:'600'}} >Images/Illustrations</Text>
      </View>
      <View style ={{alignItems:'center',justifyContent:'center'}}>
          <Text style ={{color :'#002333',fontSize:20,fontFamily:'Gilroy',fontWeight:'600',marginTop:24}} >
          App tour title
          </Text>
          <Text  style ={{color :'#9F9F9F',fontSize:14,fontFamily:'Gilroy-Regular',marginBottom:16}} >
          The app tour description goes here.
          </Text>
      </View>
      <TouchableHighlight style={{alignItems:'center',justifyContent:'center'}}
      onPress ={()=> console.log('clicked')}
      underlayColor ='transparent'
      >
    <View style={{backgroundColor:'#fff',borderRadius:7}}  >
 

      <View style ={{alignItems:'center',justifyContent:'center',width:72,height:72,borderRadius:7,borderColor:'#E5E5E5',borderWidth:2}} >
      <View style={{backgroundColor:'#00C458',height:36,width:36,borderRadius:7,position:'absolute',top:-2,right:-2}} >

</View>
    
<View style={{backgroundColor:'#fff',height:36,width:36,borderRadius:4,position:'absolute',top:0,right:0}} >

</View>
      <View style={{backgroundColor:'#00C458',height:56,width:56,borderRadius:4,shadowColor:'#00C4583D',alignItems:'center',justifyContent:'center',alignSelf:'center',shadowOffset:{
        width:0,height:2
      },shadowOpacity:0.1
    }}
     
      
      >
        
          <Image source ={require('../assets/Group5.png')} style={{height:15,width:15,alignItems:'center',justifyContent:'center'}} />
          
      </View>

      </View>
      </View>
      </TouchableHighlight>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
  }
})