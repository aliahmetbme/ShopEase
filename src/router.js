import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from "./Pages/MainPage";
import Categories from "./Pages/Categories";
import MyBag from "./Pages/MyBag";
import Favorites from "./Pages/Favorites";
import Details from './Pages/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function ProviderApp() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="MyBag" component={MyBag} />
            <Tab.Screen name="Favorites" component={Favorites} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>

  );
}