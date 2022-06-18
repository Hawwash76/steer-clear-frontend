import { StatusBar, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  text: {fontSize:16},
  input: { borderBottomWidth: 1, marginLeft: 10, width: 150 },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width:"80%"
  },
  dropdown: {
    width: 100,
    marginLeft: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5
  },
  placeholderStyle: { fontSize: 13 },
  add: {
    backgroundColor: "#ffdecc",
    width: 100,
    padding: 10,
    color: "white",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  }
})

export default styles
