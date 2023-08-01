import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, ToastAndroid, View } from "react-native";
import SmallCard from "../components/card/SmallCard";
import { Theme } from "../Theme";
import F16Text from "../components/Typography/F16Text";
import ShoesCard from "../components/card/ShoeCard";
import { getProduct } from "../Service/getProduct";
import { getCategory } from "../Service/getCategory";
import { navigate } from "../Navigator/util";

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('jewelery');
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCategoryData()
  }, [])
  const getData = () => {
    getProduct()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        ToastAndroid.show(err, ToastAndroid.LONG);
      });
  };
  const getCategoryData = () => {
    getCategory().then((res) => {
      setCategoryData(res.data)
    }).catch(err => {
      alert(err)
    })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 16, marginTop: 32, gap: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 32 }}>
          <F16Text title="Popular Items" />
          <Text
            style={{ fontSize: 13, color: Theme.Secondry }}
            onPress={() => {
              navigation.navigate('AllProducts', { data })
            }}
          >
            See all
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          ListFooterComponent={<View style={{ height: 200 }}></View>}
          numColumns={2}
          renderItem={(item) => {
            return (
              category == item.item?.category && <ShoesCard
                image={item.item?.image}
                title={item.item?.category}
                price={`$` + item.item?.price}
                onPress={() => { navigation.navigate('ProductDetailsPage', { data: item.item }) }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
