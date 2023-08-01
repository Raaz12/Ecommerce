import React from "react"
import { SafeAreaView } from "react-native"
import BackButton from "../components/Buttons/BackButton"

const ProfileScreen = () => {
    return (<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BackButton title="Profile Screen" />
    </SafeAreaView>)
}

export default ProfileScreen