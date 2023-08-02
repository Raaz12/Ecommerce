import React from "react"
import { SafeAreaView } from "react-native"
import BackButton from "../components/Buttons/BackButton"

const FavoriteScreen = () => {
    alert('Sorry could not completed this section due to shortage of time')
    return (<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BackButton title="Sorry could not completed this section due to shortage of time!!" />

    </SafeAreaView>)
}

export default FavoriteScreen