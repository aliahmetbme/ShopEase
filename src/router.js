import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/Ionicons"
import useBottomNavigatorVisible from './Hooks/useBottomNavigatiorVisible';

import MainPage from "./Pages/MainPage";
import Categories from "./Pages/Categories";
import MyBag from "./Pages/MyBag";
import Favorites from "./Pages/Favorites";
import Details from './Pages/Details';
import Collections from "./Pages/Collections"
import PaidPage from './Pages/PaidPage';
import ComplatedPage from './Pages/ComplatedPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import Profile from './Pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Pages = ["Details", "PaidPage", "ComplatedPage", "Profile", "LoginPage"]

const tabBarStyle = {
  backgroundColor: "#d1d5db",
  borderTopWidth: 2,
  borderColor: "#FF7F00"
}
function LoginStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginPage' component={LoginPage}></Stack.Screen>
      <Stack.Screen name='RegistrationPage' component={RegistrationPage}></Stack.Screen>
    </Stack.Navigator>
  )
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
      <Stack.Screen name="Details" component={Details} options={{ gestureEnabled: false, headerShown: true, headerTitle: data.detailedData.title, headerBackTitle: " " }}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile} options={{ gestureEnabled: false, headerShown: false }} />
    </Stack.Navigator>
  )
}

function PaidStack({ navigation, route }) {
  const data = useSelector(state => state.todos)

  useBottomNavigatorVisible(
    { Pages: Pages, Style: tabBarStyle },
    { route, navigation },
  )
  return (
    <Stack.Navigator screenOptions={{ focused: "MyBag", headerShown: false }}>
      <Stack.Screen name="MyBag" component={MyBag}></Stack.Screen>
      <Stack.Screen name="MainPageStack" component={MainStack}></Stack.Screen>
      <Stack.Screen name="Details" component={Details} options={{ gestureEnabled: false, headerShown: true, headerTitle: data.detailedData.title, headerBackTitle: " " }}></Stack.Screen>
      <Stack.Screen name="PaidPage" component={PaidPage}></Stack.Screen>
      <Stack.Screen name="ComplatedPage" component={ComplatedPage} options={{ gestureEnabled: false }}></Stack.Screen>
    </Stack.Navigator>
  )
}

function FavoritesStack({ navigation, route }) {
  const data = useSelector(state => state.todos)

  useBottomNavigatorVisible(
    { Pages: Pages, Style: tabBarStyle },
    { route, navigation },
  )
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={Favorites} ></Stack.Screen>
      <Stack.Screen name="Details" component={Details} options={{ gestureEnabled: false, headerShown: true, headerTitle: data.detailedData.title, headerBackTitle: " " }}></Stack.Screen>
    </Stack.Navigator>
  )
}


function App() {

  const bag = useSelector(state => state.bag).bag
  const amount_products_inBag = bag.length
  const log_in = useSelector(state => state.login).isIn
  
  const TabBarIcon = ({ color, size, iconName }) => {
    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {!log_in
        ?
        <NavigationContainer>
          <LoginStack></LoginStack>
        </NavigationContainer>
        :
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "MainStack") {
                  iconName = focused ? "storefront-sharp" : "storefront-outline";
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
                } else if (route.name === "PaidStack") {
                  iconName = focused ? "basket-sharp" : "basket-outline";
                  size = focused ? RFPercentage(4.75) : RFPercentage(3.5);
                  color = focused ? "#FF7F00" : "white";
                } else if (route.name === "FavoritesStack") {
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
            <Tab.Screen name="PaidStack" component={PaidStack} options={amount_products_inBag ? { tabBarBadge: amount_products_inBag } : null} />
            <Tab.Screen name="FavoritesStack" component={FavoritesStack} />
          </Tab.Navigator>
        </NavigationContainer>
      }
    </GestureHandlerRootView>
  );
}


export default function ProviderApp() {

  return (
    <Provider store={store}>
      <App />
    </Provider>

  )
}