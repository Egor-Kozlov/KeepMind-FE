import {DeveloperTool} from '@app/components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';

import {
  RootStackParamList,
  SCREEN_NAMES,
  rootAuthorizedStackRoutes,
  rootUnauthorizedStackRoutes,
} from '@app/types';

const Router: React.FC = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const navigationRef = React.useRef<any>(null);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isAuthorized
            ? rootAuthorizedStackRoutes.map(stackRoute => (
                <RootStack.Screen key={stackRoute.name} {...stackRoute} />
              ))
            : rootUnauthorizedStackRoutes.map(stackRoute => (
                <RootStack.Screen key={stackRoute.name} {...stackRoute} />
              ))}
        </RootStack.Navigator>
      </NavigationContainer>
      <DeveloperTool
        onPress={() =>
          navigationRef.current?.navigate(SCREEN_NAMES.DEVELOPER_TOOLS)
        }
      />
    </View>
  );
};

export default Router;
