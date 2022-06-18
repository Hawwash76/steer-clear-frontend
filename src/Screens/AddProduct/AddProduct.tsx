import { SafeAreaView, Text, View, StyleSheet, TextInput, Touchable, TouchableOpacity,Alert } from "react-native"
import Header from "../CreatePost/Components/Header/Header"
import { Dropdown } from "react-native-element-dropdown"
import { useState } from "react"
import React, {FC} from "react"
import { useRoute } from "@react-navigation/native"
import styles from "./styles"



interface Props {
}

const AddProduct: FC<Props> =() => {
  const [value, setValue] = useState(null)
  const  test  =useRoute<any>().params;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Product Name</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Product Barcode:</Text>
          <Text >{test.barcode}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Product Category</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle	={styles.placeholderStyle}
            data={categories}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={(item) => {
              setValue(item.value)
            }}
          />
        </View>
        <TouchableOpacity style={styles.add}><Text>Add</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default AddProduct;

const categories = [
  { label: "Category 1", value: "1" },
  { label: "Category 2", value: "2" },
  { label: "Category 3", value: "3" },
  { label: "Category 4", value: "4" },
  { label: "Category 5", value: "5" },
  { label: "Category 6", value: "6" },
  { label: "Category 7", value: "7" },
  { label: "Category 8", value: "8" }
]
