import { FlatList, SafeAreaView, View } from "react-native"

import { useEffect, useState } from "react";
import { getCategory } from "../Service/getCategory";
import { Theme } from "../Theme";
import BackButton from "../components/Buttons/BackButton";
import ShoesCard from "../components/card/ShoeCard";
import SmallCard from "../components/card/SmallCard";

const ShopScreen = ({ navigation, route }) => {
  const data = route.params.data;
  const [categoryData, setCategoryData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [category, setCategory] = useState('electronics');
  // console.log(data);
  useEffect(() => {
    getCategoryData()
  }, [])
  const getCategoryData = () => {
    getCategory().then((res) => {
      setCategoryData(res.data)
    }).catch(err => {
      alert(err)
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 32 }}>
        <BackButton title="Popular Items" back onPress={() => { navigation.goBack() }} />
        <View style={{ height: 50, marginTop: 32 }}>
          <FlatList
            horizontal
            data={categoryData}
            renderItem={(item) => {
              return (
                <SmallCard
                  style={{
                    backgroundColor:
                      activeTab == item.index ? Theme.Secondry : Theme.white,
                  }}
                  onPress={() => {
                    setActiveTab(item.index);
                    setCategory(item.item)
                  }}
                  title={item.item}
                />
              );
            }}
          />
        </View>
        <FlatList data={data} numColumns={2} renderItem={item => {
          return (
            category === item.item.category && <ShoesCard title={item.item.category} image={item.item.image} price={item.item.price} onPress={() => {
              navigation.navigate('ProductDetailsPage', { data: item.item })
            }} />
          )
        }} />
      </View>
    </SafeAreaView>
  )
}

export default ShopScreen