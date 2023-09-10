import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/Ionicons"
import useBottomNavigatorVisible from './Hooks/useBottomNavigatiorVisible';

import MainPage from "./Pages/MainPage";
import Categories from "./Pages/Categories";
import MyBag from "./Pages/MyBag";
import Favorites from "./Pages/Favorites";
import Details from './Pages/Details';
import Collections from "./Pages/Collections"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Pages = "Details"

const tabBarStyle = {
  backgroundColor: "#DADADA",
  borderTopWidth:2,
  borderColor:"#FF7F00"  
}
function MainStack({ navigation, route }) {
  const data = useSelector(state => state.todos)

  useBottomNavigatorVisible(
    { Pages: Pages, Style: tabBarStyle },
    { route, navigation },
  )
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainPage" component={MainPage}></Stack.Screen>
      <Stack.Screen name="Details" component={Details} options={{ headerShown: true, headerTitle: data.detailedData.title, headerBackTitle: " " }}></Stack.Screen>
    </Stack.Navigator>
  )
}
export default function ProviderApp() {


  const TabBarIcon = ({ color, size, iconName }) => {
    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "MainStack") {
                  iconName = focused ? "storefront-sharp": "storefront-outline";
                  size = focused ? RFPercentage(4.75) : RFPercentage(3.5);
                  color = focused ? "#FF7F00" : "white";
                } else if (route.name === "Categories") {
                  iconName = focused ? "apps" : "apps-outline";
                  size = focused ? RFPercentage(4.75) : RFPercentage(3.5);
                  color = focused ? "#FF7F00" : "white";
                } else if (route.name === "Collections") {
                  iconName = focused ? "layers" : "layers-outline";
                  size = focused ? RFPercentage(4.75) : RFPercentage(3.5);
                  color = focused ? "#FF7F00" : "white";
                } else if (route.name === "MyBag") {
                  iconName = focused ? "basket-sharp" : "basket-outline";
                  size = focused ? RFPercentage(4.75) : RFPercentage(3.5);
                  color = focused ? "#FF7F00" : "white";
                } else if (route.name === "Favorites") {
                  iconName = focused ? "heart-sharp" : "heart-outline";
                  size = focused ? RFPercentage(4.75) : RFPercentage(3.5);
                  color = focused ? "#FF7F00" : "white";
                }

                return <TabBarIcon color={color} size={size} iconName={iconName} />;
              },
              headerShown: false,
              tabBarStyle: tabBarStyle,
              tabBarShowLabel: false,
            })}
          >
            <Tab.Screen name="MainStack" component={MainStack} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Collections" component={Collections} />
            <Tab.Screen name="MyBag" component={MyBag} />
            <Tab.Screen name="Favorites" component={Favorites} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}