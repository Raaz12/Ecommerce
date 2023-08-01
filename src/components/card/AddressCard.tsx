import { View, Text } from 'react-native'
import React from 'react'
import { Theme } from '../../Theme'
import F14Text from '../Typography/F14Text'

const AddressCard = () => {
    return (
        <View style={{ height: 108, backgroundColor: Theme.white, justifyContent: 'space-around', padding: 10, borderRadius: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <F14Text title='Jane Doe' />
                <F14Text title='Change' color={Theme.Primary} />
            </View>
            <F14Text title='3 Newbridge Court 
Chino Hills, CA 91709, United States'/>
        </View>
    )
}

export default AddressCard