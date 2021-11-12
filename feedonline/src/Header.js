import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
const HeaderComponent = () => {
    return (
        <SafeAreaView>
            <Header
                leftComponent={
                <Ionicons name="phone-portrait-outline" size={20} />
                 
            }
            centerComponent={<Text style={{fontStyle:'italic' , fontSize:15 , fontWeight:'bold' , color:'#fff'}}>FeedOnline</Text>}
            />
        </SafeAreaView>
    )
}

export default HeaderComponent