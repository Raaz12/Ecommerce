import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BackButton from '../Buttons/BackButton'
import { Theme } from '../../Theme';
import F16Text from '../Typography/F16Text';
import StarRating from 'react-native-star-rating';
import F11Text from '../Typography/F11Text';
import F14Text from '../Typography/F14Text';
import RedButton from '../Buttons/RedButton';

const ProductDetailsPage = ({ navigation, route }) => {
    const data = route.params.data;
    // //console.log(data);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: Theme.white, }}>
                <BackButton back title={data.category} style={{ marginTop: 32, marginHorizontal: 16, }} onPress={() => navigation.goBack()} />
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: data.image }} style={{ height: 300, width: Dimensions.get('screen').width }} />
                </View>
                <View style={{ flex: 1, marginHorizontal: 16, gap: 16, }}>
                    <F16Text title={data.title} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>

                            <StarRating maxStars={5} rating={data.rating.rate} fullStarColor={'yellow'} />
                            <F14Text title={data.rating.count + ` ratings`} />
                        </View>
                        <F16Text title={`$` + data.price} />
                    </View>
                    <F11Text title={data.description} />
                </View>
                <View style={{ height: 200 }}>

                </View>
            </ScrollView>
            <View style={{ gap: 10, marginBottom: 10 }}>
                <RedButton title='BUY' onPress={() => { navigation.navigate('CheckoutScreen') }} />
                <RedButton title='Add to cart' onPress={() => { alert('Sorry could not completed this section due to shortage of time') }} />
            </View>
        </View>
    )
}

export default ProductDetailsPage

const styles = StyleSheet.create({})