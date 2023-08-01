import React from "react"
import { Text } from "react-native"
import { Theme } from "../../Theme";

interface IText {
    title?: string;
    style?: any,
    color?: string;
}
const F14Text = (auto: IText) => {
    return (
        <Text style={[{ fontSize: 14, fontWeight: '500', color: auto.color, lineHeight: 21, letterSpacing: -0.15 }, auto.style]}>
            {auto.title}
        </Text>
    )
}

export default F14Text;