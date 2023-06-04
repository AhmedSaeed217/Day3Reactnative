import React from "react";
import { View, Text, SectionList, Image } from "react-native";
import styles from "../../style";

const Users = () => {
  const sections = [
    {
      id: "0",
      title: "Section One",
      data: [
        {
          id: "0",
          text: "Ahmed",
          src: require("../../assets/images/team-1.jpg"),
        },
        {
          id: "1",
          text: "Ali",
          src: require("../../assets/images/team-2.jpg"),
        },
        {
          id: "2",
          text: "Aya",
          src: require("../../assets/images/team-3.jpg"),
        },
      ],
    },
    {
      id: "1",
      title: "Section Two",
      data: [
        {
          id: "3",
          text: "Nada",
          src: require("../../assets/images/team-4.jpg"),
        },
        {
          id: "4",
          text: "Hassan",
          src: require("../../assets/images/team-1.jpg"),
        },
      ],
    },
    {
      id: "2",
      title: "Section Three",
      data: [
        {
          id: "5",
          text: "Yasser",
          src: require("../../assets/images/team-2.jpg"),
        },
      ],
    },
    {
      id: "3",
      title: "Section Four",
      data: [
        {
          id: "6",
          text: "Sara",
          src: require("../../assets/images/team-3.jpg"),
        },
      ],
    },
  ];
  return (
    <View>
      <SectionList style={{ backgroundColor: "lightgray" }}
        sections={sections}
        renderSectionHeader={(props) => (
          <Text style={styles.headerStyle}>{props.section.title}</Text>
        )}
        renderItem={(props) => (
          <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
            <Image
              source={props.item.src}
              style={{ borderRadius: 50, height: 60, width: 60 }}
            ></Image>
            <Text
              style={{
                padding: 15,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {props.item.text}
            </Text>
          </View>
        )}
      ></SectionList>
    </View>
  );
};

export default Users;
