import React from "react"
import { SafeAreaView } from "react-native"
import BackButton from "../components/Buttons/BackButton"

const FavoriteScreen = () => {
    return (<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BackButton title="Favorite Screen" />
    </SafeAreaView>)
}

export default FavoriteScreen