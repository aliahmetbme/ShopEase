import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const useBottomNavigatorVisible = (props, { route, navigation }) => {

  const routeName = getFocusedRouteNameFromRoute(route);
  const isRouteIncluded = props.Pages.includes(routeName);

  useLayoutEffect(() => {
    if (isRouteIncluded) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: props.Style,
      });
    }
  }, [navigation, route, isRouteIncluded]);
};

export default useBottomNavigatorVisible;