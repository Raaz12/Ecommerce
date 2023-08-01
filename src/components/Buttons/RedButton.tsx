import React from "react";
import { TouchableOpacity } from "react-native";
import { Theme } from "../../Theme";
import F13Text from "../Typography/F13Text";

interface IButton{
    title?:string,
    onPress?:any,
    style?:any
    textStyle?:any,
}
const RedButton = (auto:IButton) => {
  return (
    <TouchableOpacity
      style={[{
        height: 48,
        backgroundColor: Theme.Primary,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
      },auto.style]}
      onPress={()=>{auto.onPress()}}
    >
      <F13Text style={[{ color: Theme.white },auto.textStyle]} title={auto.title} />
    </TouchableOpacity>
  );
};
export default RedButton;
