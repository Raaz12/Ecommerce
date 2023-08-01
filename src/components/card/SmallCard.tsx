import React from "react";
import { Image, Pressable ,StyleSheet} from "react-native";
import { Theme } from "../../Theme";
import F13Text from "../Typography/F13Text";

interface IImage {
  style?: any;
  title?: string;
  onPress?: any;
}
const SmallCard = (auto: IImage) => {
  return (
    <Pressable
      style={[
        {
          height: 44,
          borderRadius: 22,
          padding: 10,
          backgroundColor: Theme.white,
          flexDirection:'row',
          marginHorizontal:4,
          justifyContent:'center',
          alignContent:'center',
          gap:4
        },
        auto.style,
      ]}
      onPress={()=>{auto.onPress()}}
    >
      <F13Text title={auto.title} color={Theme.black}/>
    </Pressable>
  );
};


const styles=StyleSheet.create({

})
export default SmallCard;
