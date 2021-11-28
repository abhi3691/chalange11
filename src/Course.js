import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ScrollViewBase } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Course extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#00202F', height: '30%', width: '100%' }}>
                    <View style={{ height: '40%' }}></View>
                    <View style={{ marginLeft: 32 }}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Biology</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderColor: '#00C458', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#00C458', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#00C458', marginLeft: 10, marginRight: 30 }}>12 Chapters</Text>
                            <View style={{ borderWidth: 1, borderColor: '#00C458', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#00C458', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#00C458', marginLeft: 10, marginRight: 30 }}>124 hours</Text>
                        </View>
                    </View>

                </View>

                <ScrollView style={{position:'absolute',top:'25%',height:'75%',width:'100%'}} onScrollBeginDrag={false}>
               
                 <View style={{alignItems:'center',justifyContent:'center'}}>
                    <View style={{ height: 115, width: 311, borderWidth: 1, borderRadius: 4, borderColor: '#EEEEEE', margin: 10, elevation: 1, backgroundColor: '#FFFFFF',  justifyContent: 'center' }}>
                    <Text style={{color:'#002333',fontSize:18,fontWeight:'600',paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:10}}>Long chapter name can be shown here.</Text>
                        <View style={{ flexDirection: 'row', paddingLeft:20, alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>Chapter 1</Text>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>3 parts</Text>
                        </View>

                    </View>


                    <View style={{ height: 115, width: 311, borderWidth: 1, borderRadius: 4, borderColor: '#EEEEEE', margin: 10, elevation: 1, backgroundColor: '#FFFFFF', marginTop: '1%' }}>
                        <Text style={{color:'#002333',fontSize:18,fontWeight:'600',paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:10}}>Long chapter name can be shown here.</Text>
                        <View style={{ flexDirection: 'row', paddingLeft:20, alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>Chapter 1</Text>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>3 parts</Text>
                        </View>
                   
                    
                    </View>

             


                <View style={{ height: 115, width: 311, borderWidth: 1, borderRadius: 4, borderColor: '#EEEEEE', margin: 10, elevation: 1, backgroundColor: '#FFFFFF', marginTop: '1%' }}>
                <Text style={{color:'#002333',fontSize:18,fontWeight:'600',paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:10}}>Long chapter name can be shown here.</Text>
                        <View style={{ flexDirection: 'row', paddingLeft:20, alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>Chapter 1</Text>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>3 parts</Text>
                        </View>
                </View>




                <View style={{ height: 115, width: 311, borderWidth: 1, borderRadius: 4, borderColor: '#EEEEEE', margin: 10, elevation: 1, backgroundColor: '#FFFFFF', marginTop: '1%' }}>
                <Text style={{color:'#002333',fontSize:18,fontWeight:'600',paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:10}}>Long chapter name can be shown here.</Text>
                        <View style={{ flexDirection: 'row', paddingLeft:20, alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>Chapter 1</Text>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>3 parts</Text>
                        </View>
                </View>



                <View style={{ height: 115, width: 311, borderWidth: 1, borderRadius: 4, borderColor: '#EEEEEE', margin: 10, elevation: 1, backgroundColor: '#FFFFFF', marginTop: '1%' }}>
                <Text style={{color:'#002333',fontSize:18,fontWeight:'600',paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:10}}>Long chapter name can be shown here.</Text>
                        <View style={{ flexDirection: 'row', paddingLeft:20, alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>Chapter 1</Text>
                            <View style={{ borderWidth: 1, borderColor: '#9F9F9F', height: 12, width: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ backgroundColor: '#9F9F9F', height: 6, width: 6, borderRadius: 3 }}>

                                </View>
                            </View>
                            <Text style={{ color: '#9F9F9F', marginLeft: 10, marginRight: 30 }}>3 parts</Text>
                        </View>

                </View>
                </View>
                </ScrollView>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'

    }
})