import React, { useState ,Component} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import HeaderComponent from '../Header';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Slider } from 'react-native-elements';
import { Animated, Image } from 'react-native';
import sendFeed from '../module/connectserver';
import { useNavigation } from '@react-navigation/native';
const FeedTab = ({ navigation , route  }) => {
    const [status, setStatus] = useState('None')
    const [time, setTime] = useState(1)
    const data = route.params;
    const feed = () => {

        const option = {
            IP: data.ip,
            PORT: data.port
        }
        setTimeout(()=>{setStatus('Feeding.....')} , time *1000)
        sendFeed(option, time).then(mes => {
            setStatus(mes)
        }

        )
         
    }
    return (
        <SafeAreaProvider>
            <HeaderComponent />
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <Image
                    style={{ width: 120, height: 120, borderRadius: 50, marginTop: 60 }}
                    source={{ uri: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80' }}
                />
                <Slider
                    value={time}
                    onValueChange={(value) => setTime(value)}
                    maximumValue={15}
                    minimumValue={1}
                    step={1}
                    thumbStyle={{ height: 15, width: 15, backgroundColor: 'red' }}
                    thumbTouchSize={{ width: 20, height: 30 }}
                    trackStyle={{ height: 10, width: 130, backgroundColor: 'transparent' }}
                />
                <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Time : {time}</Text>
                <TouchableOpacity
                    onPress={feed}

                    style={{ padding:10,backgroundColor: '#16a34a', marginVertical: 20, borderRadius: 50 }}
                    >
                        <Text style={{fontWeight:'bold',fontStyle:'italic'}}>  Feed  </Text>
                    </TouchableOpacity>


                <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>
                    IP : {data.ip} 
                </Text>
                <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>
                    Port : {data.port}
                </Text>
                <View style={{flexDirection:'row'}}> 
                <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 25, marginVertical: 30, color: 'green' }}>
                    Status : {status}.


                </Text>
                </View>
            </View>
        </SafeAreaProvider>
    )

}
export default FeedTab;