import React, { Dispatch, SetStateAction } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { MainRootStack } from "../../Navigators/Main"
import { ProductInfo } from "./ProductInfo"
import { Entypo } from "@expo/vector-icons"
interface Props {
  productInfo: ProductInfo
  setIsScanned: Dispatch<SetStateAction<boolean>>
}

export default function ProductNotFound(props: Props) {
  const navigation = useNavigation<NavigationProp<MainRootStack>>()
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text
          style={{ marginBottom: 30, width: 200, fontSize: 18, marginLeft: 20 }}
        >
          Opps, no such product was found, would you like to add this product?
        </Text>
        <Entypo name="emoji-sad" size={70} color="black" style={styles.icon} />
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddProduct", { ...props.productInfo })
        }
        style={styles.add}
      >
        <Text style={{ color: "black" }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setIsScanned(false)}
        style={styles.goBack}
      >
        <Text style={{ color: "black" }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  add: {
    backgroundColor: "#ffdecc",
    width: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  },
  goBack: {
    backgroundColor: "#ffdecc",
    width: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  textHeader: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    width: 300
  },
  icon: {
    marginBottom: 30
  }
})
