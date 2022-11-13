import React from "react";
import { Platform } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Home } from "../screens/Home";
import { Favorites } from "../screens/Favorites";
import { RootStackParamList } from "../screens/RootStackParams";

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.text_label,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            height: getBottomSpace() + 56,
            paddingVertical: Platform.OS === "ios" ? 20 : 0,
          },
        }}
      >
        <Screen
          name="Listagem"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="github" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Favoritos"
          component={Favorites}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
