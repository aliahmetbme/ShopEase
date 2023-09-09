import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import useBottomNavigatorVisible from './Hooks/useBottomNavigatiorVisible';

import MainPage from "./Pages/MainPage";
import Categories from "./Pages/Categories";
import MyBag from "./Pages/MyBag";
import Favorites from "./Pages/Favorites";
import Details from './Pages/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Pages = "Details"

function MainStack({navigation, route}) {
  const data = useSelector(state => state.todos)

  useBottomNavigatorVisible(
    { Pages:Pages},
    { route, navigation },
  )
  
  return(

    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="MainPage" component={MainPage}></Stack.Screen>
      <Stack.Screen name="Details" component={Details} options={{headerShown:true, headerTitle:data.detailedData.title, headerBackTitle: " "}}></Stack.Screen>
    </Stack.Navigator>
  )
}
export default function ProviderApp() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="MainStack" component={MainStack} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="MyBag" component={MyBag} />
            <Tab.Screen name="Favorites" component={Favorites} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>

  );
}