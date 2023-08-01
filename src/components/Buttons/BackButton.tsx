import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import F34Text from "../Typography/F34Text"
import { navigationRef } from '../../Navigator/util'
interface IBack {
    title?: string,
    onPress?: any,
    style?: any,
    back?: any
}
const BackButton = (auto: IBack) => {
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center' }, auto.style]}>
            {auto.back && <TouchableOpacity onPress={() => { auto.onPress() }}>
                <Image source={require('../../assets/images/back.png')} style={{ height: 24, width: 24 }} />
            </TouchableOpacity>}
            <F34Text title={auto.title} />
        </View>
    )
}

export default BackButton