import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: { height: "90%", marginTop: Platform.OS === "android" ? 40 : 0 },
  largeViewStyle: { width: 200, height: 200, backgroundColor: "gray" },
  miniViewStyle: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    position: "absolute",
    bottom: 0,
    // margin:40
    // marginHorizontal:20
    // marginVertical:20
  },

  headerStyle: {
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
    padding: 5,
    textAlign: "center"
  },
  btnTitleStyle: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    width: 80,
    marginVertical: 10,
    marginRight: 25,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  TextInputStyle: {
    borderRadius: 10,
    backgroundColor: "#D0D3D4",
    padding: 15,
    margin: 10,
    width: 280,
    fontSize: 15,
  },
});
