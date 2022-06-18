import { FC } from "react"
import {
  View,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity
} from "react-native"
import styles from "./styles"
import PlaceholderImage from "./../../../../../Assets/General/person-placeholder-image.jpeg"
import { AntDesign } from "@expo/vector-icons"

interface Props {}

const AddComment: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={PlaceholderImage} />
      <TextInput style={styles.input} placeholder="add comment..."></TextInput>
      <TouchableOpacity>
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          style={styles.addIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

export default AddComment
