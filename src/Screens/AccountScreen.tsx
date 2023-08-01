import React, { useEffect, useState } from "react"
import { FlatList, Image, SafeAreaView, View } from "react-native"
import BackButton from "../components/Buttons/BackButton"
import F16Text from "../components/Typography/F16Text"
import { Theme } from "../Theme"
import F11Text from "../components/Typography/F11Text"
import { getProfileData } from "../Service/getProfileData"
import { useDispatch } from "react-redux"
import { auth } from "../Store/Cart"
import useCart from "../components/Hooks/useCart"

const data1 = [
    {
        title: 'My orders',
        conent: 'Already have 12 orders'
    },

    {
        title: 'Payment methods',
        conent: 'Visa  **34'
    },
    {
        title: 'Promocodes',
        conent: 'You have special promocodes'
    },
    {
        title: 'My reviews',
        conent: 'Reviews for 4 items'
    },
    {
        title: 'Settings',
        conent: 'Notifications, password'
    },

]
const AccountScreen = () => {
    const [data, setData] = useState()
    const dispatch = useDispatch();
    const { registerCart } = useCart();
    // console.log(registerCart);

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        getProfileData().then((res) => {
            setData(res.data)
            dispatch(auth({
                accessToken: res.data.token
            }))

        }).catch((err) => {
            alert(err)
        })
    }
    // console.log(data);

    return (<SafeAreaView style={{ flex: 1, }}>
        <BackButton title="My profile" style={{ marginTop: 32, }} />
        <View style={{ flex: 1, marginHorizontal: 16 }}>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <View style={{ backgroundColor: Theme.white, height: 64, width: 64, borderRadius: 100, }}>
                    <Image source={{ uri: data?.image }} style={{ height: 64, width: 64, borderRadius: 100 }} />
                </View>
                <View>
                    <F16Text title={data?.firstName + ` ` + data?.lastName} />
                    <F11Text title={data?.email} />
                </View>
            </View>

            <FlatList data={data1} renderItem={(item) => {
                return (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8, backgroundColor: Theme.white, padding: 10, height: 72 }}>
                        <View style={{ gap: 5 }}>
                            <F16Text title={item.item.title} />
                            <F11Text title={item.item.conent} />
                        </View>
                        <Image source={require('../assets/images/right.png')} style={{ height: 24, width: 24 }} />
                    </View>
                )
            }} />

        </View>
    </SafeAreaView>)
}

export default AccountScreen