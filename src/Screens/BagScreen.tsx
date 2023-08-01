import React, { useEffect, useState } from "react"
import { FlatList, SafeAreaView, View } from "react-native"
import BackButton from "../components/Buttons/BackButton"
import { getCarts } from "../Service/GetCart"
import CartCard from "../components/card/CartCard"
import RedButton from "../components/Buttons/RedButton"

const BagScreen = () => {
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        getCart();
    }, [])

    const getCart = () => {
        getCarts().then((res) => {
            console.log(res.data.products);

            setCartData(res.data.products);
        }).catch((err) => {
            alert(err)
        })
    }

    console.log(cartData);

    return (<SafeAreaView style={{ flex: 1, }}>
        <BackButton title="Cart" style={{ marginTop: 32, }} />
        <View style={{ flex: 1, gap: 10 }}>
            <FlatList data={cartData} renderItem={(item) => {
                // console.log(item.item.products[0].quantity);

                return (
                    // null
                    <CartCard quantity={item.item.quantity} id={item.item.productId} />
                )
            }} />
        </View>
        <RedButton title="CHECK OUT" onPress={() => { }} style={{ marginBottom: 10, }} />
    </SafeAreaView>)
}

export default BagScreen