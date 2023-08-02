import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../components/Buttons/BackButton";
import F16Text from "../components/Typography/F16Text";
import AddressCard from "../components/card/AddressCard";
import F14Text from "../components/Typography/F14Text";
import { Theme } from "../Theme";
import RedButton from "../components/Buttons/RedButton";

const CheckoutScreen = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1 }}>
            <BackButton
                title="Checkout"
                back
                onPress={() => {
                    navigation.goBack();
                }}
                style={{ marginTop: 32, marginHorizontal: 16, }}
            />
            <View style={{ flex: 1, marginHorizontal: 16, justifyContent: 'space-around' }}>
                <View>
                    <F16Text title="Shipping address" />
                    <AddressCard />
                </View>
                <View style={{ gap: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <F16Text title="Payment" />
                        <F14Text title="Change" color={Theme.Primary} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>

                        <TouchableOpacity
                            style={{
                                height: 38,
                                width: 64,
                                backgroundColor: Theme.white,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 8,
                            }}
                        >
                            <Image
                                source={require("../assets/images/master.png")}
                                style={{ height: 32, width: 42 }}
                            />
                        </TouchableOpacity>
                        <F14Text title="**** **** **** 3947" />
                    </View>
                </View>
            </View>
            <View style={{ gap: 10, marginBottom: 10, marginHorizontal: 16 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <F16Text title="Order:" color={Theme.Gray} />
                    <F14Text title="112$" />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <F16Text title="Delivery:" color={Theme.Gray} />
                    <F14Text title="15$" />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <F16Text title="Summary:" color={Theme.Gray} />
                    <F14Text title="127$" />
                </View>
                <RedButton title="SUBMIT ORDER" onPress={() => { alert('Sorry could not completed this section due to shortage of time') }} />
            </View>
        </View>
    );
};

export default CheckoutScreen;
