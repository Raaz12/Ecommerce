import React from "react";
import { View, Image, TouchableOpacity, ToastAndroid } from "react-native";
import F12Text from "../Typography/F12Text";
import { Theme } from "../../Theme";
import F16Text from "../Typography/F16Text";
import F14Text from "../Typography/F14Text";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import useCart from "../Hooks/useCart";
import { cart } from "../../Store/Cart";

interface IImage {
  onPress?: Function;
  image?: any,
  title?: string,
  price?: string,
}
const ShoesCard = (auto: IImage) => {
  const dispatch = useDispatch();
  const { registerCart } = useCart();
  // //console.log(registerCart);

  return (
    <TouchableOpacity
      style={{
        height: 201,
        padding: 8,
        borderRadius: 16,
        backgroundColor: Theme.white,
        margin: 8
      }}
      onPress={() => { auto.onPress() }}
    >
      <Image
        source={{ uri: auto.image }}
        style={{ height: 97, width: 137 }}
      />
      <View style={{ gap: 10 }}>
        <F12Text title="Best Seller" color={Theme.Secondry} />
        <F16Text title={auto.title} />
        <F14Text title={auto.price} />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: Theme.Secondry,
            borderTopLeftRadius: 16,
            borderBottomRightRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -16,
            marginRight: -8
          }}
          onPress={() => {
            dispatch(cart({
              cart: {
                image: auto.image,
                title: auto.title,
                price: auto.price,
              }
            }));
            ToastAndroid.show('Added to cart', ToastAndroid.LONG)
          }}

        >
          <AntDesign name="plus" size={20} color={Theme.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default ShoesCard;
