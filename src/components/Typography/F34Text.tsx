import React from "react"
import { Text } from "react-native"

interface IText{
    title?:string;
    style?:any,
}
const F34Text=(auto:IText)=>{
    return(
        <Text style={{fontSize:34,fontWeight:'700'}}>
            {auto.title}
        </Text>
    )
}

export default F34Text;