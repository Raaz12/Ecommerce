import React from "react"
import { Text } from "react-native"
import { Theme } from "../../Theme";

interface IText{
    title?:string;
    style?:any,
    color?:string;
}
const F12Text=(auto:IText)=>{
    return(
        <Text style={[{fontSize:12,fontWeight:'500',color:auto.color},auto.style]}>
            {auto.title}
        </Text>
    )
}

export default F12Text;