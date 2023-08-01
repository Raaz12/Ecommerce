import React from "react"
import { Text } from "react-native"
import { Theme } from "../../Theme";

interface IText {
    title?: string;
    style?: any,
    color?: string;
}
const F11Text = (auto: IText) => {
    return (
        <Text style={[{ fontSize: 11, fontWeight: '500', color: auto.color, letterSpacing: 0.75, lineHeight: 16 }, auto.style]}>
            {auto.title}
        </Text>
    )
}

export default F11Text;