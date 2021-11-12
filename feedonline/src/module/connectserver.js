import {io} from 'socket.io-client'
import { Text,View
 } from 'react-native'

function sendFeed(op , time){
    return new Promise((res ,rej)=>{
        const port = op.PORT
        const ip = op.IP
        const socket = io(`http://${ip}:${port}`,{
            reconnection:false
        })
        socket.on('connect',()=>{
            socket.emit('feed' , time)
             
        })
        socket.on('call' , mes => {
            res(mes)
            socket.disconnect()
            
        })

    })
 
}
 
export default sendFeed

