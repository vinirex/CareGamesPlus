import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ChallengesScreen from "./screens/ChallengesScreen";
import BenefitsScreen from "./screens/BenefitsScreen";
import ReportsScreen from "./screens/ReportsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";

            switch (route.name) {
              case "Home":
                iconName = "home-outline";
                break;
              case "Desafios":
                iconName = "trophy-outline";
                break;
              case "Benefícios":
                iconName = "gift-outline";
                break;
              case "Rankings":
                iconName = "bar-chart-outline";
                break;
              case "Perfil":
                iconName = "person-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Desafios" component={ChallengesScreen} />
        <Tab.Screen name="Benefícios" component={BenefitsScreen} />
        <Tab.Screen name="Rankings" component={ReportsScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
