import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationTab from "../components/Tabs/NavigationTab";
import { SafeAreaView } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import ShopScreen from "../Screens/Shop";
import BagScreen from "../Screens/BagScreen";
import FavoriteScreen from "../Screens/FavoriteScreen";
import AccountScreen from "../Screens/AccountScreen";

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        tabBar={(props) => (
          <NavigationTab
            key={Math.floor(Math.random() * 1000000000)}
            {...props}
          />
        )}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          key={Math.floor(Math.random() * 1000000000)}
          component={HomeScreen}
          options={{
            tabBarIconStyle: { display: "none" },
            tabBarLabelPosition: "beside-icon",
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          key={Math.floor(Math.random() * 1000000000)}
          options={{
            tabBarIconStyle: { display: "none" },
            tabBarLabelPosition: "beside-icon",
          }}
        />
        <Tab.Screen
          name="Cart"
          component={BagScreen}
          options={{
            tabBarIconStyle: { display: "none" },
            tabBarLabelPosition: "beside-icon",
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIconStyle: { display: "none" },
            tabBarLabelPosition: "beside-icon",
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          key={Math.floor(Math.random() * 1000000000)}
          options={{
            tabBarIconStyle: { display: "none" },
            tabBarLabelPosition: "beside-icon",
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;