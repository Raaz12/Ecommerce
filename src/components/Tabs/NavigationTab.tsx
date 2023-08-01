import React from "react";
import { Theme } from "../../Theme";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { homein } from "../../assets/svg/homein";
import { shopin } from "../../assets/svg/shopin";
import { favoritein } from "../../assets/svg/favoritein";
import { bagin } from "../../assets/svg/bagin";
import { accountIn } from "../../assets/svg/accountin";

const NavigationTab = ({ state, descriptors, navigation }: any) => {
  return (
    <View key={123} style={styles.wrapper}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: index,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: index,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={isFocused ? styles.activeTab : styles.tab}>
              {label === "Home" && homein}
              {label === "Shop" && shopin}
              {label === "Cart" && bagin}
              {label === "Favorite" && favoritein}
              {label === "Account" && accountIn}
              <Text
                key={Math.floor(Math.random() * 100) + 1}
                style={[isFocused ? styles.activeText : styles.text]}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: "#fff",
    width: "auto",
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
    gap: 10,
    borderRadius: 15,
  },
  activeTab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
    gap: 10,
  },
  text: {
    fontSize: 13,
    lineHeight: 16.5,
    fontWeight: "300",
    color: Theme.Gray,
  },
  activeText: {
    fontSize: 13,
    lineHeight: 16.5,
    fontWeight: "300",
    color: Theme.Primary,
  },
});

export default NavigationTab;
