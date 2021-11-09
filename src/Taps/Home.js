import React,{ Component } from 'react';
import { View, Text, StyleSheet,ScrollView,ImageBackground,Image } from 'react-native';

export default class home extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#F9F9F9',height:150,width:'100%'}}>
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
      <View>
      <View style={{marginLeft:10}}>
        <Text style={{color:'#002333',fontSize:12,fontWeight:'800'}}>Recent courses</Text>
      </View>
      <View style={{flexDirection:'row',margin:20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <ImageBackground source={require('./Assets/DNA.jpg')} style={{borderWidth:1,borderRadius:2,width:230,height:121,flexDirection:'row',alignItems:'center',marginRight:10}}>
           <View style={{alignSelf:'flex-end'}}>
             <View style={{flexDirection:'row',alignItems:'center',marginBottom:10 ,marginLeft:10}}>
             <Image source={require('./Assets/Group25.png')} style={{height:24,width:24}} />
               <Text style={{color:'#FFFFFF',fontSize:12,fontWeight:'500',paddingLeft:10}}>Course Title</Text>
              

               </View>
               <View style={{borderRadius:4,height:4,width:200,marginBottom:10,backgroundColor:'#FFFFFF1A',height:5,alignItems:'flex-start',justifyContent:'center',marginLeft:10}}>
                 <View style={{backgroundColor:'#3F57CE',width:25,alignItems:'flex-start',height:3,justifyContent:'flex-start',borderRadius:4}}>

                 </View>
             </View>
           </View>
            </ImageBackground>
            <ImageBackground source={require('./Assets/DNA.jpg')} style={{borderWidth:1,borderRadius:2,width:230,height:121,flexDirection:'row',alignItems:'center',marginRight:10}}>
            <View style={{alignSelf:'flex-end'}}>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
            
               <Text style={{color:'#FFFFFF',fontSize:12,fontWeight:'500',paddingLeft:10}}>Course Title</Text>
              

               </View>
               <View style={{borderRadius:4,height:4,width:200,marginBottom:10,backgroundColor:'#FFFFFF1A',height:5,alignItems:'flex-start',justifyContent:'center',marginLeft:10}}>
                 <View style={{backgroundColor:'#3F57CE',width:50,alignItems:'flex-start',height:3,justifyContent:'flex-start',borderRadius:4}}>

                 </View>
             </View>
           </View>
             </ImageBackground>
             <ImageBackground source={require('./Assets/DNA.jpg')} style={{borderWidth:1,borderRadius:2,width:230,height:121,flexDirection:'row',alignItems:'center',marginRight:10}}>
             <View style={{alignSelf:'flex-end'}}>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
               <Text style={{color:'#FFFFFF',fontSize:12,fontWeight:'500',paddingLeft:10}}>Course Title</Text>
              

               </View>
               <View style={{borderRadius:4,height:4,width:200,marginBottom:10,backgroundColor:'#FFFFFF1A',height:5,alignItems:'flex-start',justifyContent:'center',marginLeft:10}}>
                 <View style={{backgroundColor:'#3F57CE',width:75,alignItems:'flex-start',height:3,justifyContent:'flex-start',borderRadius:4}}>

                 </View>
             </View>
           </View>
             </ImageBackground>
             <ImageBackground source={require('./Assets/DNA.jpg')} style={{borderColor:'#002333',borderWidth:1,borderRadius:2,width:230,height:121,flexDirection:'row',alignItems:'center',marginRight:10}}>
             <View style={{alignSelf:'flex-end'}}>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
              
               <Text style={{color:'#FFFFFF',fontSize:12,fontWeight:'500',paddingLeft:10}}>Course Title</Text>
              

               </View>
               <View style={{borderRadius:4,height:4,width:200,marginBottom:10,backgroundColor:'#FFFFFF1A',height:5,alignItems:'flex-start',justifyContent:'center',marginLeft:10}}>
                 <View style={{backgroundColor:'#3F57CE',width:100,alignItems:'flex-start',height:3,justifyContent:'flex-start',borderRadius:4}}>

                 </View>
             </View>
           </View>
            </ImageBackground>
            </ScrollView>
         
          </View>
          
      </View>
      <View style={{height:'50%',marginLeft:20}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 

        </View>
        
        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 

        </View>
        
        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 

        </View>
        
        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 

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