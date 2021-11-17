import React,{ Component } from 'react';
import { View, Text, StyleSheet,ScrollView,ImageBackground,Image,TouchableHighlight } from 'react-native';


export default class home extends Component  {
  render(){ 
  return (
    
    <ScrollView style={styles.container}>
      <View style={{backgroundColor:'#F9F9F9',height:241,width:'100%'}}>
        <View style={{justifyContent:'center',height:80,margin:10,borderBottomColor:'#eee',borderBottomWidth:1}}>
          <View style={{borderColor:'#D5D5D5',borderRadius:4,height:32,width:32,borderWidth:1,marginLeft:30,alignItems:'center',justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}> 
          <View style={{backgroundColor:'#00C458',height:4,width:4,marginRight:2,borderTopLeftRadius:1}}>
          </View>
          <View style={{backgroundColor:'#00C458',height:4,width:4,borderTopRightRadius:1}}>
          </View>
          </View>
          <View style={{flexDirection:'row',marginTop:2}}> 
          <View style={{backgroundColor:'#00C458',height:4,width:4,marginRight:2,borderBottomLeftRadius:1}}>
          </View>
          <View style={{backgroundColor:'#00C458',height:4,width:4,borderBottomRightRadius:1}}>
          </View>
          </View>
          </View>
        </View>
       <View style={{margin:30}}>
       <Text style={{color:'#002333',fontSize:12,fontWeight:'600'}}>Goodmorning</Text>
       <Text style={{color:'#002333',fontSize:24,fontWeight:'bold',fontFamily:'Gilroy'}}>Aaron Taylor</Text>
       </View>
       
      </View>
      <View style={{alignItems:'center',justifyContent:'center',position:'absolute',alignSelf:'center',top:210}} >
         <ImageBackground source={require('./Assets/Group386.png')} style={{height:64,width:311,justifyContent:'space-between'}}>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}} >
             <View style={{width:'85%'}}>
           <Text style={{color:'#BAC3C7',fontSize:12,paddingLeft:30,paddingTop:10}}>Class</Text>
           <Text style={{color:'#FFFFFF',fontSize:14,paddingLeft:30}}>Plus two science</Text>
           </View>
           <Image source={require('./Assets/Path7.png')} style={{height:7,width:14,tintColor:'#FFFFFF',marginTop:10}} />
           </View>
         </ImageBackground>
        </View>
      <View style={{flexDirection:'row',margin:20,marginTop:70}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableHighlight onPress={()=> {
           
            console.log('Biology');
          }}
          underlayColor ='#00C458'
          >
          <View  style={{borderColor:'#002333',borderWidth:1,borderRadius:8,width:92,height:39,flexDirection:'row',alignItems:'center'}}>
          <View style={{backgroundColor:'#00C458',margin:10,borderRadius:10,height:23,width:20}}></View>
            <Text style={{color:'#002333',fontSize:12}}>Biology</Text>
          </View>
          </TouchableHighlight>
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
      <View style={{marginLeft:20,marginBottom:10,}}>
        <Text style={{color:'#002333',fontSize:12,fontWeight:'800'}}>Recent courses</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:20,marginBottom:20}}>
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
            <ImageBackground source={require('./Assets/sperm.jpg')} style={{borderWidth:1,borderRadius:2,width:230,height:121,flexDirection:'row',alignItems:'center',marginRight:10}}>
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
             <ImageBackground source={require('./Assets/Ecology.jpg')} style={{borderWidth:1,borderRadius:2,width:230,height:121,flexDirection:'row',alignItems:'center',marginRight:10}}>
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
             <ImageBackground source={require('./Assets/Foodscience.jpg')} style={{borderColor:'#002333',borderWidth:1,borderRadius:2,width:230,height:121,flexDirection:'row',alignItems:'center',marginRight:10}}>
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
      <View style={{height:'50%',paddingLeft:20}}>
     
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >

        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 
        <View style={{height:79,width:79,borderRadius:40,backgroundColor:'#002E43',margin:20,marginTop:30,marginBottom:10}}>

        </View>
        
        <View style={{height:96,width:174}}>
          <Text style={{color:'#FFFFFF',fontSize:18,fontWeight:'bold',paddingLeft:10}}>
          Target live classes
          </Text>
          <Text style={{color:'#446270',fontSize:14,paddingLeft:10,width:190,height:96}}>
          Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention
          </Text>
          <View style={{height:79,width:194,alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight style={{backgroundColor:'#00C458',borderRadius:4,height:47,width:145,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:12,fontWeight:'600',color:'#FFFFFF'}}>Book a free Class</Text>
            </TouchableHighlight>
          </View>
        </View>
        </View>
        
        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 
        <View style={{height:79,width:79,borderRadius:40,backgroundColor:'#002E43',margin:20,marginTop:30,marginBottom:10}}>

        </View>
        <View style={{height:96,width:174}}>
          <Text style={{color:'#FFFFFF',fontSize:18,fontWeight:'bold',paddingLeft:10}}>
          Avail free online counselling session
          </Text>
          <Text style={{color:'#446270',fontSize:14,paddingLeft:10,width:190,height:70}}>
          By LearningHub's career experts
          </Text>
          
          <View style={{height:79,width:194,alignItems:'center',justifyContent:'center'}}>
            <TouchableHighlight style={{backgroundColor:'#00C458',borderRadius:4,height:47,width:145,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:12,fontWeight:'600',color:'#FFFFFF'}}>Schedule a call</Text>
            </TouchableHighlight>
          </View>
        </View>
        </View>
        
        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 

        </View>
        
        <View style={{backgroundColor:'#002333',borderRadius:8,height:367,width:238,marginRight:10}}> 

        </View>
        
        </ScrollView>
        
      </View>
      
    </ScrollView>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    
   
  }
})