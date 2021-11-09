import React,{ Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

export default class home extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#F9F9F9',height:241,width:'100%'}}>
       <View style={{margin:30}}>
       <Text style={{color:'#002333',fontSize:12,fontWeight:'600'}}>Goodmorning</Text>
       <Text style={{color:'#002333',fontSize:24,fontWeight:'bold',fontFamily:'Gilroy'}}>Aaron Taylor</Text>
       </View>

      </View>
      <View style={{flexDirection:'row',margin:20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View  style={{borderColor:'#002333',borderWidth:1,borderRadius:8,width:92,height:39,flexDirection:'row',alignItems:'center'}}>
          <View style={{backgroundColor:'#00C458',margin:10,borderRadius:10,height:23,width:20}}></View>
            <Text style={{color:'#002333',fontSize:12}}>Biology</Text>
          </View>
          <View  style={{borderColor:'#002333',borderWidth:1,borderRadius:8,width:91,height:39,flexDirection:'row',alignItems:'center',marginLeft:10}}>
          <View style={{backgroundColor:'#00C458',margin:10,borderRadius:10,height:23,width:20}}></View>
            <Text style={{color:'#002333',fontSize:12}}>Physics</Text>
          </View>
          <View  style={{borderColor:'#002333',borderWidth:1,borderRadius:8,width:107,height:39,flexDirection:'row',alignItems:'center',marginLeft:10}}>
          <View style={{backgroundColor:'#00C458',margin:10,borderRadius:10,height:23,width:20}}></View>
            <Text style={{color:'#002333',fontSize:12}}>Chemistry</Text>
          </View>
          <View  style={{borderColor:'#002333',borderWidth:1,borderRadius:8,width:92,height:39,flexDirection:'row',alignItems:'center',marginLeft:10}}>
          <View style={{backgroundColor:'#00C458',margin:10,borderRadius:10,height:23,width:20}}></View>
            <Text style={{color:'#002333',fontSize:12}}>Maths</Text>
          </View>
          <View  style={{borderColor:'#002333',borderWidth:1,borderRadius:8,width:92,height:39,flexDirection:'row',alignItems:'center',marginLeft:10}}>
          <View style={{backgroundColor:'#00C458',margin:10,borderRadius:10,height:23,width:20}}></View>
            <Text style={{color:'#002333',fontSize:12}}>English</Text>
          </View>
        </ScrollView>
      </View>
      
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
   
  }
})