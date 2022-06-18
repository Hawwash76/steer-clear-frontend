import { FC } from "react"
import {FlatList,View,TouchableOpacity } from "react-native"
import styles from "./styles"
import AddComment from "./../AddComment/AddComment"
import Comment from "../Comment/Comment"
import { AntDesign } from '@expo/vector-icons'; 
import React, { Dispatch, SetStateAction } from "react"


interface Props {
  setShowComment: Dispatch<SetStateAction<boolean>>
}
const Holder: FC<Props> = ({setShowComment}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={()=>setShowComment(false)}><AntDesign name="back" size={30} color="black" /></TouchableOpacity>
      <FlatList
        data={DUMMYDATA}
        renderItem={({ item: comment }) => <Comment commentContent={comment} />}
        keyExtractor={(comment) => comment.id}
        style={styles.flatlist}
        ListFooterComponent={<View style={{height: 20}}/>}
      />
      <AddComment />
    </View>
  )
}

export default Holder

const DUMMYDATA = [
  {
    id: "1",
    body: "First Comment",
  },
  {
    id: "2",
    body: "Second Comment",
  },
  {
    id: "3",
    body: "Third Comment",
  },
  {
    id: "4",
    body: "some Comment",
  }
]
