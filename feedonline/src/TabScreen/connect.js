import React , {useState , useEffect}from 'react'
import { View, Text, TextInput , TouchableOpacity } from 'react-native'
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderComponent from '../Header';
 
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { connect } from 'socket.io-client';


const ConectTab = ({navigation , route}) => {
     
    const [status , setStatus] = useState('disconnect')   
    const [ip , setIP] = useState('')
    const [port , setPORT] = useState('5001')
    
    return (
        <SafeAreaProvider>
            <View>
                <HeaderComponent />
                <View style={{ alignContent: 'center', marginTop: 150, alignItems: 'center' }}>
                    <View style={{flexDirection:'row'}}> 
                    <Text style={{ marginRight:8,marginBottom: 5, fontStyle: 'italic', fontWeight: 'bold' }}>IP ADDRESS</Text>
                    <TextInput
                        style={{ borderBottomWidth: 2, width: 150, height: 30 }}
                        placeholder='192.132.253.23'
                        value={ip}
                        onChange={(e) => {setIP(e.target.value)}}
                    />
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{ marginRight:8,marginBottom: 5,marginTop:5, fontStyle: 'italic', fontWeight: 'bold' }}>PORT </Text>
                    <TextInput
                        value={port}
                        style={{ borderBottomWidth: 2, width: 75, height: 30 } }
                        maxLength={4}
                        onChange={(e) => {setPORT(e.target.value)}}
                    />
                    </View>
                    
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Feed',{
                                ip:ip,
                                port:port
                            })
                        }}
                        title="submit"
                        style={{padding:10,borderRadius:50 , backgroundColor:'red',marginVertical:20}}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
 

                </View>
            </View>
        </SafeAreaProvider>)

}
 
export default ConectTab;