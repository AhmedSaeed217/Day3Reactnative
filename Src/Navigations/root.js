import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import routes from "../Common/routes";
import Users from "../Screens/users";
import Todo from "../Screens/todo";
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.users}
        component={Users}
        options={{
          tabBarLabel: "Users",
          tabBarActiveTintColor: "green",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: () => (
            <Icon name="person" size={25} color="green" />
          ),
        }}
      />
      <Tab.Screen
        name={routes.todo}
        component={Todo}
        options={{
          tabBarLabel: "Todo List",
          tabBarActiveTintColor: "green",
          tabBarLabelStyle: {
            fontSize: 14,
          },

          tabBarIcon: () => <Icon name="list" size={25} color="green" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
