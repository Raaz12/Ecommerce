import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Theme } from '../../Theme'
import F16Text from '../Typography/F16Text';
import { getProductById } from '../../Service/getProductById';
import { deleteCarts } from '../../Service/deleteCart';

interface ICart {
    image?: string,
    quantity?: number;
    title?: string;
    price?: string;
    id?: string,
}
const CartCard = (auto: ICart) => {
    const [quantity, setQuantity] = useState(auto.quantity)
    const [data, setData] = useState([])
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        getProductById(auto.id).then((res) => {
            setData(res.data)
            // console.log(res.data);

        }).catch((err) => {
            alert(err)
        })
    }

    const deleteCart = (id: string) => {
        deleteCarts(id).then((res) => {
            alert('Its a dummy api so produts will not be remove ')
        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <View style={{ height: 104, backgroundColor: Theme.white, flexDirection: 'row', margin: 5 }}>
            <Image source={{ uri: data.image }} height={104} width={104} />
            <View style={{ flex: 1, height: 104, marginRight: 10, justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <F16Text title={data.category} />
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/more.png')} style={{ height: 16, width: 4 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            if (quantity > 0) {
                                setQuantity(quantity - 1)
                            }
                            if (quantity == 1) {
                                deleteCart(auto.id)
                            }
                        }}>
                            <Image source={require('../../assets/images/minus.png')} style={{ height: 36, width: 36 }} />
                        </TouchableOpacity>
                        <F16Text title={`${quantity}`} />
                        <TouchableOpacity onPress={() => {
                            setQuantity(quantity + 1)
                        }}>
                            <Image source={require('../../assets/images/plus.png')} style={{ height: 36, width: 36 }} />
                        </TouchableOpacity>
                    </View>
                    <F16Text title={`$` + data.price} />
                </View>
            </View>
        </View>
    )
}

export default CartCard